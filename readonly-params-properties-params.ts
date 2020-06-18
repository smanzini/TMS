import { version } from "os"

class Car {
    readonly version: string //proprietà readonly che si chiama version
    constructor (version:string, //proprietà nel constructor
                protected name: string,
                protected model: string,
                protected year: string,
                public color: string
                )
        {
        this.version = version //inizializzo la prima proprietà nel constructor
        //this.color = color -> ma non è necessario inizializzare le altre proprietà 
        // esiste già l'inizializzazione delle proprietà nel constructor (ovvero this.proprietà) perché il constructor lo fa in maniera automatica
                       
        // non posso crere il metodo 'setVersion (version:string)' che va ad impostare la version
            // perché non posso inizializzare qui la propietà con 'this.version = version' perché version è solo readonly;
            // posso inizializzarla in alto quando definisco la classe Car con 'readonly version:string = '1.2'
            // oppure inserisco il valore (sotto) con let car = new Car ('2.1') 
        }
        getVersion (){ //metodo e ritorno valore
            return this.version; //ritorna la proprietà
                    }
        getColor (){
            return this.color;
        }
        getYear () {
            return this.year;
        }
        
          }

    let car = new Car ('2.1', 'Fiat', '500', '1987', 'rosso fiammante');
    console.log ('La versione è ' + car.getVersion())
    console.log ('Il colore è ' + car.getColor())
    console.log ('L anno è ' + car.getYear())