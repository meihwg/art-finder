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
        this._search = "https://api.artic.edu/api/v1/artworks/search?q=" + value.replace(" ", ",") + "&limit=10";
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
    async getSearchResults() {
        try{
            fetch(this._search)
                .then(response => response.json())
                .then(data => {
                    let results = {};
                    data.array.forEach(element => {
                        results[element.id] = {"title": element.title, "image": element.image_id, };
                    });
                })
                .catch(error => {
                    console.error("Echec de la recherche");
                });

            /*const resp = await fetch(this._search);
            const data = await resp.json();
            return data;*/

            // TODO: Récupérer l'image (un autre fetch)
        } catch (e) {
            console.error("Echec de la recherche");
        }
    }

}