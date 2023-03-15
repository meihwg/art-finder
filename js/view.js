// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Objet contenant la vue
const view = {

    // Récupérer les éléments graphiques
    searchInput: document.getElementById("input"),
    searchBtn: document.getElementById("btn-lancer-recherche"),
    resultsContainer: document.getElementById("bloc-resultats"),

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
            result.classList.add("bloc-resultat");

            // Ajouter le titre
            result.innerHTML = "<h2>" + results[i].getTitle() + "</h2>";
            // Ajouter l'image
            result.innerHTML += "<img src='" + results[i].getImageLink() + "' alt='Image de l'oeuvre'>";
            // Ajouter l'auteur
            result.innerHTML += "<p>Auteur : " + results[i].getAuthor() + "</p>";

            // Ajouter le bloc au conteneur
            this.resultsContainer.appendChild(result);
        }


    },
};
