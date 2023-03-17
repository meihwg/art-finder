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
    // Récupérer la de la recherche
    let value = view.searchInput.value;
    // Modifier la recherche
    search.setSearch(value);
    // Lancer la recherche
    await search.getSearchResults();
    // Afficher les résultats
    view.displayResults(search);
});

// Lorsque l'utilisateur clique sur le bouton favoris
view.favoriteBtn.addEventListener("click", function () {
    // Enregistrer le favoris
    if (view.searchInput.value != "") {
        search.addFavorite(view.searchInput.value);
    }
    search.saveFavorites();
    // Afficher les favoris
    view.displayFavorites(search);
});

// Lorsque l'utilisateur clique sur un favoris
let searchClickListeners = function(event) {
    // Récupérer la balise a du bouton
    let fav = event.target.parentNode;
    // Récupérer la valeur du favoris
    fav = fav.firstChild.innerHTML;
    // Modifier la recherche
    search.setSearch(fav);
    // Afficher la recherche dans le champ de recherche
    view.searchInput.value = fav;
    // Changer l'apparence du bouton favoris
    changeFavoriteBtn();
    // Lancer la recherche
    search.getSearchResults()
        .then(() => {
            // Afficher les résultats
            view.displayResults(search);
        });
}

// Lorsque l'utilisateur clique sur un bouton de suppression de favoris
let deleteClickListeners = function(event) {
    // Récupérer la balise a du bouton
    let fav = event.target.parentNode;
    // Récupérer la valeur du favoris
    fav = fav.firstChild.innerHTML;
    // Supprimer le favoris
    search.removeFavorite(fav);
    search.saveFavorites();
    // Afficher les favoris
    view.displayFavorites(search);
}

// Lorsque l'utilisateur tape un caractère dans le champ de recherche
view.searchInput.addEventListener("keyup", function (event) {
    // Si la touche est entrée
    if (event.keyCode === 13) {
        // Lancer la recherche
        search.getSearchResults()
            .then(() => {
                // Afficher les résultats
                view.displayResults(search);
            });
    }

    // Changer l'apparence du bouton favoris
    changeFavoriteBtn();
});

// Change l'apparence du bouton favoris
let changeFavoriteBtn = function() {
    if (search.isFavorite(view.searchInput.value)) {
        view.favoriteBtn.innerHTML = "";
        view.favoriteBtn.innerHTML = "<img src='images/bxs-star.svg' alt='Etoile de favoris' width='22'/>";
    } else {
        view.favoriteBtn.innerHTML = "";
        view.favoriteBtn.innerHTML = "<img src='images/bx-star.svg' alt='Etoile de favoris' width='22'/>";  
    }
}