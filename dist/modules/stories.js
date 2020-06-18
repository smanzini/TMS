"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Per importare alcune cose
//import {Book, Categories} from './book' // fra parentesi graffe le cose che voglio importare, in questo caso è la classe Book e l'array Categories
// da (from) il path dove è questa classe e non c'è bisogno di mettere .ts
// Per importare tutto
var bookAll = __importStar(require("./book")); // bookAll è la variabile definita per import di tutto
// oppure: import defaultAny from './book' vuol dire che assegno una variabile 'defaultAny' per importare ogni cosa 
//che è definita default nell'altro modulo senza dover specificare cosa voglio importare
var book = new bookAll.Book; //instanzo la classe : in caso di import parziale utilizzerò new Book, 
//altrimenti devo richiamare la variabile totale bookAll.Book
// in caso di import di default metto new 'defaultAny' per importare ogni cosa che è definita default nel modulo di export
book.year = 1998; //poi popolo le proprietà
book.title = 'La mia storia';
book.genre = 'Avventura';
console.log('Il libro è del ' + book.year + ' è intitolato ' + book.title + ', il genere è ' + book.genre);
console.log(' ed appartiene alle ' + bookAll.Categories[0]);
// se si vuole usare la sintassi nel browser, bisogna includere un modulo come requirejs.org (andare su sito)
