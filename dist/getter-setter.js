"use strict";
// getter & setter
// es. variabile pubblica e si vuole intervenire prima che l'utente modifichi questa variabile
var User = /** @class */ (function () {
    // perché non mette constructor?
    function User(_name) {
        this._name = _name;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name; //la proprietà _name che è l'Uppercase di name
        },
        set: function (name) {
            this._name = name.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('stefano');
user.name = ('stefano');
console.log(user.name);
