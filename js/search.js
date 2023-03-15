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
        this._search = value.replace(" ", ",");
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
     * Récupérer résultat de la recherche
     * @returns {Promise<*>}
     */
    async getSearchResults() {
        try{
            const resp = await fetch("https://api.artic.edu/api/v1/artworks/search?q=" + this._search);
            const data = await resp.json();

            // TODO: Voir quoi faire de ça
            return data;
        } catch (e) {
            console.error("Echec de la recherche");
        }
    }

}