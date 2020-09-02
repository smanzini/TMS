import { UserInterface, userClass } from './../interfaces/user-interface'; // (43) in automatico Angular importa UserInterface
// (15) creo una classe UserService (che esporto) perché un domani per esempio vado a prendere i dati dell'array da un server in maniera dinamica
// (38) creo la cartella services e ci metto il file user.service.ts che era prima nel folder users
import { Injectable } from '@angular/core';

// (18) definisco un servizio come injectable in modo tale che Angular sappia che questo servizio ha delle dipendenze
@Injectable() //è un decoratore indica ad Angular che questo servizio può avere delle dipendenze, prima di creare un single tone, cioè una singola istanza
export class UserService {
    users: Array <UserInterface> = [ // (42) vado a dichiarare l'array con il nome 'Array' e fra <> metto l'interface che ho appena creato nel folder interfaces e in automatico Angular importa UserInterface (29) inserisco come variabile della classe UserService l'array users
         //(39) definisco il tipo di ogni variabile (es. se stringa o number) creando una INTERFACE per estendere una classe definendo i tipi di variabili
         {id: 1, //(80) inserisco id di ogni utente per sapere quale utente vado a modificare, ma anche perché quando andrò a creare un utente verifico se quell'id esiste già
            pnr: '645321',
            service: 'flight',
            name: 'Stefano',
            lastname: 'Manzini',
            from: 'Linate',
            to: 'Charles de Gaulle',
            date: '06-30-2020',
            rate: 140
        }, {
            id: 2,
            pnr: '563421',
            service: 'hotel',
            name: 'Claudio',
            lastname: 'Manzini',
            from: 'Malpensa',
            to: 'Fiumicino',
            date: '07-03-2020',
            rate: 120
        }, {
            id: 3,
            pnr: '465312',
            service: 'flight',
            name: 'Riccardo',
            lastname: 'Manzini',
            from: 'Linate',
            to: 'London City',
            date: '08-12-2020',
            rate: 98
        }
                ]

    constructor (){ // se volessi inserire altri servizi o oggetti, devo prima aggiungerli all'interno di providers in app.module.ts, ad esempio :
        // export class UserService { url: string;
       // constructor (url:string) { 
        // this.url = url;
    }
        getUsers () { // è il metodo della classe array, getUsers riceve un id e ritorna l'utente che è in quella posizione id; valido in generale per ritornare TUTTI gli utenti;
            return this.users; //(141) inizialmente era getUsers(){ return this.users; }
                     } 

        getUser (id:number): UserInterface {
            return this.users[id-1];
             //(146) però non devo inserire id perché l'id parte da 1 (vedi qui sopra l'array degli users) mentre in realtà l'indice dell'utente pate da 0 -> quindi o metto return this.users[id-1], oppure trovo l'indice che abbia quell'id, con il comando find (MA a me non viene), ritorna (=>) valore TRUE quando user.id è uguale ad id attuale: return this.users.find (user => user.id === id)
        }
        deleteUser (user) { // (30) aggiungo il metodo nel componente padre (users) deleteUser per cancellare gli utenti, che poi verrà richiamato nel componente figlio (user)
            let index = this.users.indexOf(user); //(31) devo definire l'indice dell'elemento array che poi devo andare a cancellare
            if (index>=0) {
                this.users.splice(index,1); // (31)splice è un metodo dell'array con posizione (indice) dell'elemento e quanti elementi voglio eliminare (in questo caso 1) e se volessi anche aggiungere altri elementi, ma prima bisogna definire l'indice dell'elemento
                            }
            
                  }
            // (89) creo il metodo updateUser
        updateUser(user: UserInterface) { // (90) occorre trovare l'id dell'utente nell'array users per andare ad aggiornare l'utente giusto; uso findIndex che è una funzione che ritorna true se trova il valore v all'interno della parentesi; se id dell'utente passato dalla funzione è lo stesso id dell'utente che dobbiamo aggiornare
            const idx = this.users.findIndex((v) => v.id === user.id);
            alert("Utente "+ user.name+ " "+ user.lastname+ " aggiornato" + " Indice= "+idx+" Id= " + user.id);
            if (idx !== -1) { //(91) se idx è diverso da -1 vuol dire che la costante idx è quella giusta, quindi andiamo ad aggiornare l'array
            this.users[idx] = user;
            }
        }
        //(94) creo il metodo createUser
        createUser(user: UserInterface) { // (94) occorre trovare l'id dell'utente nell'array users per andare ad aggiornare l'utente giusto; uso findIndex che è un ciclo che ritorna true se trova il valore v all'interno della parentesi; se id dell'utente passato dalla funzione è lo stesso id dell'utente che dobbiamo aggiornare. NON devo cercare l'indice perché è un utente nuovo quindi sarà 0
            this.users.splice(0,0,user); // (94) splice è un metodo dell'array con posizione (indice) in questo caso 0 perché è un nuovo utente, quanti elementi voglio eliminare (in questo caso 0) e che voglio  aggiungere un nuovo user
            }

}