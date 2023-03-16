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
    _favorites = {};

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
        // TODO: Vérifier si la recherche est valide
        this._search = "https://api.artic.edu/api/v1/artworks/search?q=" + value.replace(" ", ",") + "&fields=title,image_id,description,date_start,date_end,dimensions,medium_display,artwork_type_title,artist_title&limit=30";
    }

    /**
     * Retourne un favoris
     * @param {number} index
     */
    getFavorite(index) {
        return this._favorites[index];
    }

    /**
     * Ajoute un favoris
     * @param {string} value
     */
    addFavorite(value) {
        this._favorites.push(value);
    }

    /**
     * Supprime un favoris
     * @param {number} index
     */
    removeFavorite(index) {
        this._favorites.splice(index, 1);
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
     * Récupérer résultat de la recherche
     * @returns {Promise<*>}
     */
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
    }
}