// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Objet contenant la vue
const view = {

    // Récupérer les éléments graphiques
    searchInput: document.getElementById("input"),
    searchBtn: document.getElementById("btn-lancer-recherche"),

    /**
     * Affiche les résultats
     * @param {Promise<*>} results
     */
    displayResults(results) {
        

        // TODO : Afficher les résultats
        console.log(results);
    },
};
