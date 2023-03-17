// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Objet contenant la vue
const view = {

    // Récupérer les éléments graphiques
    searchInput: document.getElementById("search-input"),
    searchBtn: document.getElementById("search-button"),
    favoriteBtn: document.getElementById("favorite-button"),
    resultsContainer: document.getElementById("results-container"),
    favoritesContainer: document.getElementById("favorites-list"),
    favoritesSearch : document.querySelectorAll(".favorite-search"),
    favoritesDelete : document.querySelectorAll(".favorite-delete"),
    favorites : document.querySelectorAll(".favorite-button"),
    waitBlock : document.getElementById("wait-block"),
    suggestsList : document.getElementById("suggests-list"),
    limitInput : document.getElementById("limit-input"),

    /**
     * Affiche les résultats
     * @param {Search} search
     */
    displayResults(search) {
        // Récupérer les résultats à afficher
        let results = search.getResults();
        // Vider le conteneur
        this.resultsContainer.innerHTML = "";
        // Si il n'y a pas de résultats
        if (results.length == 0) {
            this.resultsContainer.innerHTML = "<p>Aucun résultat</p>";
            return;
        }
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
            // raccourcir la description + ajouter ...
            let description = results[i].getDescription();
            if(description != null && description.length > 300) {
                description = description.substring(0, 300) + "...";
                result.innerHTML += "<p title='" + results[i].getDescription() + "'>" + description + "</p>";
            } else if(description != null) {
                result.innerHTML += "<p>" + description + "</p>";
            }
            // Ajouter le type d'oeuvre
            result.innerHTML += "<p> Type d'oeuvre : " + results[i].getType() + "</p>";
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

    /**
     * Affiche les favoris
     * @param {Search} search
     */
    displayFavorites(search) {
        // Récupérer les favoris à afficher
        let favorites = search.getFavorites();
        // Si il n'y a pas de favoris
        if (favorites == null || favorites.length == 0) {
            this.favoritesContainer.innerHTML = "<p>Vous n'avez pas encore de favoris</p>";
            return;
        }

        // Vider les conteneurs
        this.favoritesContainer.innerHTML = "";
        this.suggestsList.innerHTML = "";

        // Pour chaque favoris
        for (let i = 0; i < favorites.length; i++) {
            // Créer un bloc
            let result = document.createElement("div");
            // Ajouter la classe
            result.classList.add("favorite-button");

            // Ajouter le nom du favoris
            result.innerHTML = "<a class='favorite-search' title='Relancer la recherche'>" + favorites[i] + "</a> <p class='favorite-delete' title='Supprimer le favoris'>x</p>";

            // Ajouter un listener sur le favoris
            let favoriteText = result.querySelector(".favorite-search");
            favoriteText.addEventListener("click", searchClickListeners);
            // Ajouter un listener sur le bouton de suppression
            let favoriteDelete = result.querySelector(".favorite-delete");
            favoriteDelete.addEventListener("click", deleteClickListeners);

            // Ajouter le bloc au conteneur
            this.favoritesContainer.appendChild(result);

            // Ajouter le favoris aux suggestions
            let suggest = document.createElement("option");
            suggest.value = favorites[i];
            this.suggestsList.appendChild(suggest);
        }
    },
    
    /**
     * Change l'apparence du bouton favoris
     * @param {Search} search 
     */
    changeFavoriteBtn(search){
        if (search.isFavorite(view.searchInput.value)) {
            view.favoriteBtn.innerHTML = "";
            view.favoriteBtn.innerHTML = "<img src='images/bxs-star.svg' alt='Etoile de favoris' width='22'/>";
        } else {
            view.favoriteBtn.innerHTML = "";
            view.favoriteBtn.innerHTML = "<img src='images/bx-star.svg' alt='Etoile de favoris' width='22'/>";  
        }
    },
};


