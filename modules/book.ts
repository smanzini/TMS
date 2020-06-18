// il modulo è un file di js il cui contenuto è isolato cioè indipendente dall'ambiente globale di js

export const Categories = [
    'Short stories',
    'Science ficton stories',
    'Spy stories'
] 

export class Book { // se metto export default class Book, vuol dire che nell'import non dovrò specificare la classe che importo
                    //e import importerà ogni variabile, funzione, interfcae, categoria, oggetto, che è definita come default nell'export
    title: string = ""
    author: string = ""
    genre: string = ""
    year: number = 0
}
