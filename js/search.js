// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

/**
 * Classe Search
 */
class Search {
    /**
     * Recherche actuelle
     * @type {string}
     */
    _search;

    /**
     * Favoris
     * @type {array}
     */
    _favorites = [];

    /**
     * Résultats de la recherche
     * @type {Object}
     */
    _results = {};

    /**
     * Constructeur
     */
    constructor() {
        this._search = "";
        this._favorites = [];
    }

    /**
     * Retourne la recherche actuelle
     * @returns {string}
     */
    getSearch() {
        return this._search;
    }

    /**
     * Modifie la recherche actuelle
     * @param {string} value
     */
    setSearch(value) {
        this._search = "https://api.artic.edu/api/v1/artworks/search?q=" + value.replace(" ", ",") + "&fields=title,image_id,description,date_start,date_end,dimensions,medium_display,artwork_type_title,artist_title&limit=30";
    }

    /**
     * Retourne les favoris
     * @returns {array}
     */
    getFavorites() {
        this.loadFavorites();
        return this._favorites;
    }

    /** 
     * Retourne le favoris à l'index donné
     * @param {number} index
     */
    getFavoriteAtIndex(index) {
        this.loadFavorites();
        return this._favorites[index];
    }

    /**
     * Ajoute un favoris
     * @param {string} value
     */
    addFavorite(value) {
        if(this._favorites == null){
            this._favorites = [value];
        } else {
            this._favorites.push(value);
        }
    }

    /**
     * Supprime un favoris
     * @param {string} value
     */
    removeFavorite(value) {
        this._favorites.splice(this._favorites.indexOf(value), 1);
    }

    /**
     * Retourne les résultats de la recherche
     * @returns {Object}
     */
    getResults() {
        return this._results;
    }

    /**
     * Modifie les résultats de la recherche
     * @param {Object} value
     */
    setResults(value) {
        this._results = value;
    }

    /**
     * Sauvegarde les favoris dans le local storage
     */
    saveFavorites() {
        localStorage.setItem("favorites", JSON.stringify(this._favorites));
    }

    /**
     * Charge les favoris depuis le local storage
     */
    loadFavorites() {
        this._favorites = JSON.parse(localStorage.getItem("favorites"));
    }

    /**
     * Récupérer résultat de la recherche
     * @returns {Promise<*>}
     */
    /* Version sans await (trop lente)
    getSearchResults() {
        fetch(this._search)
            .then(response => response.json())
            .then(data => {
                let results = [];
                data.data.forEach(element => {
                    // Créer un objet artPiece
                    results.push(new artPiece(element.id, element.title, element.description, element.artist_title, element.date_start, element.date_end, element.dimensions, element.image_id, element.medium_display, element.artwork_type_title));
                });
                this.setResults(results);
            })
            .catch(error => {
                console.error("Echec de la recherche" + error);
            });
    }*/
    async getSearchResults() {
        try {
            let response = await fetch(this._search);
            let data = await response.json();
            let results = [];
            data.data.forEach(element => {
                // Créer un objet artPiece
                results.push(new artPiece(element.id, element.title, element.description, element.artist_title, element.date_start, element.date_end, element.dimensions, element.image_id, element.medium_display, element.artwork_type_title));
            });
            this.setResults(results);
        } catch (error) {
            console.error("Echec de la recherche" + error);
        }
    }

    /**
     * Retourne si la recherche est en favoris
     * @param {string} search
     * @returns {boolean}
     */
    isFavorite(search) {
        let favorites = this.getFavorites();
        let isFavorite = false;
        if (favorites == null) {
            return false;
        }
        favorites.forEach(element => {
            if (element == search) {
                isFavorite = true;
            }
        });
        return isFavorite;
    }
}