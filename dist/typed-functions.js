"use strict";
// typed functions
// function myFunction (prodotto: {fattore1: number, fattore2: number}){
// console.log ('myFunction' + prodotto.fattore1 + ' * ' + prodotto.fattore2 + '= ' + prodotto.fattore1 * prodotto.fattore2 
// }
// myFunction ({fattore1: 5, fattore2: 4})
function myFunction(prodotto) {
    console.log('myFunction Prodotto -> ' + prodotto.fattore1 + ' * ' + prodotto.fattore2 + ' = ' + prodotto.fattore1 * prodotto.fattore2);
}
myFunction({ fattore1: 5, fattore2: 4 });
// myFunction con let e stringa + numero
var myFunc2;
myFunc2 = function (nome, età) {
    console.log(nome + ' ha ' + età + ' anni');
};
myFunc2('Stefano', 49);
//arrowFunc stringa
var myArrowFunc = function (e) { console.log('myArrowFunc ' + e); };
myArrowFunc('Stefano');
//arrowFunc prodotto
var myArrowFunc2 = function (n1, n2) { return n1 * n2; }; // il terzo number dopo la parentesi serve ad indicare che tipo è il ritorno di funzione
console.log('myArrowFunc2 ' + myArrowFunc2(2, 3));
//arrowFunc prodotto
var myArrowFunc3 = function (p1, p2) { return p1 * p2; };
console.log('myArrowFunc3 ' + myArrowFunc3(10, 40));
