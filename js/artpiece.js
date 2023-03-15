// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

/**
 * Classe artPiece
 */
class artPiece {
    /**
     * Identifiant de l'oeuvre
     * @type {number}
     */
    _id;

    /**
     * Titre de l'oeuvre
     * @type {string}
     */
    _title;

    /**
     * Description de l'oeuvre
     * @type {string}
     */
    _description;

    /**
     * Auteur de l'oeuvre
     * @type {string}
     */
    _author;

    /**
     * Dates de l'oeuvre
     * @type {string}
     */
    _dates;

    /**
     * Dimensions de l'oeuvre
     * @type {string}
     */
    _dimensions;

    /**
     * Image de l'oeuvre
     * @type {string}
     */
    _imagelink;

    /**
     * Medium de l'oeuvre
     * @type {string}
     */
    _medium;

    /**
     * Type de l'oeuvre
     * @type {string}
     */
    _type;

    /**
     * Constructeur
     */
    constructor(id, title, description, author, date_start, date_end, dimensions, image, medium, type) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._author = author;
        this._dates = date_start + " - " + date_end;
        this._dimensions = dimensions;
        this._imagelink = "https://www.artic.edu/iiif/2/" + image + "/full/843,/0/default.jpg";
        this._medium = medium;
        this._type = type;
    }

    // Getters
    getId() {
        return this._id;
    }

    getTitle() {
        return this._title;
    }

    getDescription() {
        return this._description;
    }

    getAuthor() {
        return this._author;
    }

    getDates() {
        return this._dates;
    }

    getDimensions() {
        return this._dimensions;
    }

    getImageLink() {
        return this._imagelink;
    }

    getMedium() {
        return this._medium;
    }

    getType() {
        return this._type;
    }
}