// (15) creo una classe UserService (che esporto) perché un domani per esempio vado a prendere i dati dell'array da un server in maniera dinamica

import { Injectable } from '@angular/core';

// (18) definisco un servizio come injectable in modo tale che Angular sappia che questo servizio ha delle dipendenze
@Injectable() //è un decoratore indica ad Angular che questo servizio può avere delle dipendenze, prima di creare un single tone, cioè una singola istanza
export class UserService {
    users = [ //(29) inserisco come variabile della classe UserService l'array users
        {
            pnr: '645321',
            service: 'flight',
            name: 'Stefano',
            lastname: 'Manzini',
            from: 'Linate',
            to: 'Charles de Gaulle',
            date: '30-06-2020'
        }, {
            pnr: '563421',
            service: 'hotel',
            name: 'Claudio',
            lastname: 'Manzini',
            from: 'Malpensa',
            to: 'Fiumicino',
            date: '03-07-2020'
        }, {
            pnr: '465312',
            service: 'flight',
            name: 'Riccardo',
            lastname: 'Manzini',
            from: 'Linate',
            to: 'London City',
            date: '12-08-2020'
        }
                ]

    constructor (){ // se volessi inserire altri servizi o oggetti, devo prima aggiungerli all'interno di providers in app.module.ts, ad esempio :
        // export class UserService { url: string;
       // constructor (url:string) { 
        // this.url = url;
    }
        getUsers (){ // è il metodo della classe array
            return this.users;
                     } 
        deleteUser (user) { // (30) aggiungo il metodo nel componente padre (users) deleteUser per cancellare gli utenti, che poi verrà richiamato nel componente figlio (user)
            let index = this.users.indexOf(user); //(31) devo definire l'indice dell'elemento array che poi devo andare a cancellare
            if (index>=0) {
                this.users.splice(index,1); //splice è un metodo dell'array con posizione (indice) dell'elemento e quanti elementi voglio eliminare (in questo caso 1) e se volessi anche aggiungere altri elementi, ma prima bisogna definire l'indice dell'elemento
            }
            
        }
}