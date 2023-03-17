// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Initialisation du modèle
let search = new Search();

// ### Initialisation des listeners ###

// Au chargement de la page
window.addEventListener("load", async function () {
    // Afficher les favoris
    view.displayFavorites(search);
});

// Lorsque l'utilisateur clique sur le bouton de recherche
view.searchBtn.addEventListener("click", async function () {
    // Afficher le loader
    view.waitBlock.style.display = "block";
    // Récupérer la valeur de la recherche
    let value = view.searchInput.value;
    // Récupérer le nombre de résultats à afficher
    let limit = view.limitInput.value;
    // Modifier la recherche
    search.setLimit(limit);
    search.setSearch(value);
    // Lancer la recherche
    search.getSearchResults()
        .then(() => {
            // Afficher les résultats
            view.displayResults(search);
            // Cacher le loader
            view.waitBlock.style.display = "none";
        });
});

// Lorsque l'utilisateur clique sur le bouton favoris
view.favoriteBtn.addEventListener("click", function () {
    // Enregistrer le favoris
    if (view.searchInput.value != "" && !search.isFavorite(view.searchInput.value)) {
        search.addFavorite(view.searchInput.value);
    }
    search.saveFavorites();
    // Afficher les favoris
    view.displayFavorites(search);
    view.changeFavoriteBtn(search);
});

// Lorsque l'utilisateur clique sur un favoris
let searchClickListeners = function(event) {
    // Afficher le loader
    view.waitBlock.style.display = "block";
    // Récupérer la balise a du bouton
    let fav = event.target.parentNode;
    // Récupérer la valeur du favoris
    fav = fav.firstChild.innerHTML;
    // Modifier la recherche
    search.setSearch(fav);
    // Afficher la recherche dans le champ de recherche
    view.searchInput.value = fav;
    // Changer l'apparence du bouton favoris
    view.changeFavoriteBtn(search);
    // Lancer la recherche
    search.getSearchResults()
        .then(() => {
            // Afficher les résultats
            view.displayResults(search);
            // Cacher le loader
            view.waitBlock.style.display = "none";
        });
}

// Lorsque l'utilisateur clique sur un bouton de suppression de favoris
let deleteClickListeners = function(event) {
    // Récupérer la balise a du bouton
    let fav = event.target.parentNode;
    // Récupérer la valeur du favoris
    fav = fav.firstChild.innerHTML;
    if (confirm('Voulez-vous vraiment supprimer la recherche "' + fav + '" de vos favoris ?')) {
        // Supprimer le favoris
        search.removeFavorite(fav);
        search.saveFavorites();
        // Afficher les favoris
        view.displayFavorites(search);
        view.changeFavoriteBtn(search);
    }
}

// Lorsque l'utilisateur tape un caractère dans le champ de recherche
view.searchInput.addEventListener("keyup", function (event) {
    // Si la touche est entrée
    if (event.key === "Enter") {
        // Afficher le loader
        view.waitBlock.style.display = "block";
        // Récupérer la valeur de la recherche
        let value = view.searchInput.value;
        // Modifier la recherche
        search.setSearch(value);
        // Lancer la recherche
        search.getSearchResults()
            .then(() => {
                // Afficher les résultats
                view.displayResults(search);
                // Cacher le loader
                view.waitBlock.style.display = "none";
            });
    }

    // Changer l'apparence du bouton favoris
    view.changeFavoriteBtn(search);
});

