// (15) creo una classe UserService (che esporto) perché un domani per esempio vado a prendere i dati dell'array da un server in maniera dinamica

import { Injectable } from '@angular/core';

// (18) definisco un servizio come injectable in modo tale che Angular sappia che questo servizio ha delle dipendenze
@Injectable() //è un decoratore indica ad Angular che questo servizio può avere delle dipendenze, prima di creare un single tone, cioè una singola istanza
export class UserService {
    constructor (){ // se volessi inserire altri servizi o oggetti, devo prima aggiungerli all'interno di providers in app.module.ts, ad esempio :
        // export class UserService { url: string;
       // constructor (url:string) { 
        // this.url = url;
    }
    getUsers (){ // è il metodo della classe array
    return [
        
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

    } 
}