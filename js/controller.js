// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Initialisation du modèle
let search = new Search();

// ### Initialisation des listeners ###

// Lorsque l'utilisateur clique sur le bouton de recherche
view.searchBtn.addEventListener("click", function () {
    // Récupérer la de la recherche
    let value = view.searchInput.value;
    // Modifier la recherche
    search.setSearch(value);
    // Lancer la recherche
    search.getSearchResults();
    // Afficher les résultats
    view.displayResults(search);
});
