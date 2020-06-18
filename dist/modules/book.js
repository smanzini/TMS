"use strict";
// il modulo è un file di js il cui contenuto è isolato cioè indipendente dall'ambiente globale di js
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.Categories = void 0;
exports.Categories = [
    'Short stories',
    'Science ficton stories',
    'Spy stories'
];
var Book = /** @class */ (function () {
    function Book() {
        //e import importerà ogni variabile, funzione, interfcae, categoria, oggetto, che è definita come default nell'export
        this.title = "";
        this.author = "";
        this.genre = "";
        this.year = 0;
    }
    return Book;
}());
exports.Book = Book;
