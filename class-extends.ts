// classes extension

//import { stringify } from "querystring";

class Animalbase { //definisco il gruppo di classi Animalbase ma non creo ancora la classe che definisco sotto con let tortora = new Animalbase
    name: string //name è una proprietà
    //tipo: number -> avrei voluto inserire anche il numero della classe come proprietà, ad esempio 1 per Animalbase e 2 per i derivati
    constructor (name: string){
        this.name = name; ////inizializzo la proprietà della classe nel constructor 
        //this.tipo = tipo;
        }
    getName(){ //getName è un metodo, il nome è completamente inventato e ha il formato metodo (x:) {}
        return 'Il mio nome è ' + this.name; // this.name è la proprietà della classe
            }
    move(distance: number){ //move è un metodo con una variabile distance di tipo number
        console.log ('e volo per ' + distance + ' kilometri')
                         }

}

let tortora = new Animalbase ('tortora') // creo una classe tortora all'interno del gruppo di classi Animalbase
    console.log (tortora.getName()) // il mio nome è colomba
    tortora.move(200) // e volo per 200 kilometri

class Birds extends Animalbase { // non ha un costruttore ma richiama quello della classe Animalbase
place: string //altra proprietà della classe che aggiungo, ma non posso accedere alla proprietà quindi aggiungo il metodo getPlace
    
constructor (name: string, place:string){
    super(name);
    this.place = place; 
                                        }
    getPlace(): string { // questa è la signature del metodo, devo impostare questo metodo con setPlace
        return this.place; //questa è l'implementazione del metodo
                        }
    setPlace (place:string) {
    this.place = place //questa è l'implementazione del metodo
                            }
    move (distance:number) { //signature del metodo
        //super.move(distance); ->così eredito il metodo move con la variabile distanza dalla classe principale
        //ora invece sovrascrivo con console.log e non utilizzo il metodo ereditato
        console.log ('e volo senza stancarmi per ' + distance + ' kilometri') 
    }
                                }
//ora aggiungo la classe colomba del gruppo Birds che eredita da Animalbase e con due proprietà (non più una) descritte nel nuovo constructor (name e place)
let colomba = new Birds ('colomba', 'Genova');
//colomba.setPlace ('cielo')
console.log (colomba.getName()+ ' abito a ' + colomba.getPlace())
colomba.move(150)
