// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Objet contenant la vue
const view = {

    // Récupérer les éléments graphiques
    searchInput: document.getElementById("search-input"),
    searchBtn: document.getElementById("search-button"),
    resultsContainer: document.getElementById("results-container"),

    /**
     * Affiche les résultats
     * @param {Promise<*>} results
     */
    displayResults(search) {
        // Récupérer les résultats à afficher
        let results = search.getResults();
        // Vider le conteneur
        this.resultsContainer.innerHTML = "";
        // Pour chaque résultat
        for (let i = 0; i < results.length; i++) {
            // Créer un bloc
            let result = document.createElement("div");
            // Ajouter la classe
            result.classList.add("result-block");

            // Ajouter le titre
            result.innerHTML = "<h3>" + results[i].getTitle() + " - " + results[i].getAuthor() + "</h3>";
            // Ajouter l'image
            result.innerHTML += "<img src='" + results[i].getImageLink() + "' alt='Image de l'oeuvre'>";
            // Ajouter la description
            result.innerHTML += "<p>" + results[i].getDescription() + "</p>";
            // Ajouter le type d'oeuvre
            result.innerHTML += "<p> Type : " + results[i].getType() + "</p>";
            // Ajouter les dates
            result.innerHTML += "<p> Dates : " + results[i].getDates() + "</p>";
            // Ajouter les dimensions
            result.innerHTML += "<p> Dimensions : " + results[i].getDimensions() + "</p>";
            // Ajouter le medium
            result.innerHTML += "<p> Technique : " + results[i].getMedium() + "</p>";

            // Ajouter le bloc au conteneur
            this.resultsContainer.appendChild(result);
        }


    },
};
