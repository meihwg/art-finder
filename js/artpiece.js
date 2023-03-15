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
    _image;

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
        this._image = "https://www.artic.edu/iiif/2" + image;
        this._medium = medium;
        this._type = type;
    }

    // Getters
    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get author() {
        return this._author;
    }

    get dates() {
        return this._dates;
    }

    get dimensions() {
        return this._dimensions;
    }

    get image() {
        return this._image;
    }

    get medium() {
        return this._medium;
    }

    get type() {
        return this._type;
    }
}