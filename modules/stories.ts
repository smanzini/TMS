// Per importare alcune cose
//import {Book, Categories} from './book' // fra parentesi graffe le cose che voglio importare, in questo caso è la classe Book e l'array Categories
                            // da (from) il path dove è questa classe e non c'è bisogno di mettere .ts
// Per importare tutto
import * as bookAll from './book' // bookAll è la variabile definita per import di tutto

// oppure: import defaultAny from './book' vuol dire che assegno una variabile 'defaultAny' per importare ogni cosa 
//che è definita default nell'altro modulo senza dover specificare cosa voglio importare

let book = new bookAll.Book; //instanzo la classe : in caso di import parziale utilizzerò new Book, 
                            //altrimenti devo richiamare la variabile totale bookAll.Book
                            // in caso di import di default metto new 'defaultAny' per importare ogni cosa che è definita default nel modulo di export
book.year = 1998 //poi popolo le proprietà
book.title = 'La mia storia'
book.genre = 'Avventura'

console.log ('Il libro è del '+ book.year + ' è intitolato ' + book.title + ', il genere è ' + book.genre)
console.log (' ed appartiene alle ' + bookAll.Categories[0])

// se si vuole usare la sintassi nel browser, bisogna includere un modulo come requirejs.org (andare su sito)