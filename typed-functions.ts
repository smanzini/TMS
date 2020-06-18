// typed functions
// function myFunction (prodotto: {fattore1: number, fattore2: number}){
// console.log ('myFunction' + prodotto.fattore1 + ' * ' + prodotto.fattore2 + '= ' + prodotto.fattore1 * prodotto.fattore2 
// }
// myFunction ({fattore1: 5, fattore2: 4})

function myFunction (prodotto: {fattore1: number, fattore2: number}){
    console.log ('myFunction Prodotto -> ' + prodotto.fattore1 + ' * ' + prodotto.fattore2 + ' = ' + prodotto.fattore1 * prodotto.fattore2)
}

myFunction ({fattore1: 5, fattore2: 4})

// myFunction con let e stringa + numero
let myFunc2 : (x: string, y: number) => void;
myFunc2 = function (nome: string, età: number) : void {
    console.log (nome + ' ha ' + età + ' anni')
}
myFunc2 ('Stefano', 49);

//arrowFunc stringa

let myArrowFunc = (e:any)=> {console.log('myArrowFunc '+ e)}
myArrowFunc ('Stefano')

//arrowFunc prodotto
let myArrowFunc2 =  (n1:number,n2: number): number => n1*n2 // il terzo number dopo la parentesi serve ad indicare che tipo è il ritorno di funzione
console.log('myArrowFunc2 ' + myArrowFunc2(2,3))

//arrowFunc prodotto
let myArrowFunc3 = (p1:number,p2: number) => p1*p2
console.log('myArrowFunc3 ' + myArrowFunc3(10,40))



