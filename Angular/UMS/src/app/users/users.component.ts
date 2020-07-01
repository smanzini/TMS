import { UserService } from './user.service';
// Un componente in un modulo può essere ad esempio l’intestazione di una griglia di utenti, un altro è il corpo centrale con tutti gli utenti selezionabili ed infine l’ultimo componente può essere il footer con la navigazione delle pagine.
// Creo una cartella sotto app e la chiamo users, poi creo il file users.component.ts (perché devo creare un componente in typescript).
// Quindi creo un export class UsersComponent
// poi per farlo diventare componente, occorre un ‘decorator’ ovvero un @Component e con l’autocomplete l’editor in automatico inserisce da dove deve importare il componente from @angular/core
//

import { Component, OnInit } from '@angular/core'; //con l’autocomplete l’editor in automatico inserisce da dove deve importare il componente from @angular/core + importa anche la funzione OnInit
import { sharedStylesheetJitUrl } from '@angular/compiler';
//import { Http2ServerRequest } from 'http2';

@Component({ // (2) definisco un decorator che è una funzione che aggiunge delle proprietà ad una classe normale
            // all'interno si passa oggetto di configurazione
    selector: 'app-users', // (3) devo mettere il selector nella radice app.component.html
    // template: '<h2> Users </h2>' se voglio scrivere sulla stessa riga; se voglio scrivere su più righe, ad esempio in una tabella, allora apice inverso si fa con ALT + \ (in alto a sinistra)
    
    // (6) MA meglio scrivere templateUrl: quindi creo un nuovo file sotto users che chiamo users.component.html 
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'] // (8) definisco l'altra proprietà del componente che è styleUrls e creo il file stile sotto users che chiamo users.component.css e lo metto fra parentesi quadre per indicare che è un array e che posso passare diversi fogli di stile

})
export class UsersComponent implements OnInit { // (1) nomino la classe come users+component
    //(19) aggiungo implements OnInit. Angular ha degli hook cioè dei ganci in cui si verifica un evento e ci si può agganciare a quell'evento ad esempio la funzione oninit. Angular, una volta che il componente (o direttiva) è stato inizializzato, chiamerà automaticamente questa funzione (su angular.io cercare oninit)
    title = "Travellers"; //(9) aggiungo la variabile o proprietà title che poi vado a pubblicare in users.component.html
    users = []; //array
        // (14) invece di inserire qui gli elementi dell'array vado a creare un servizio esterno, quindi creo un file sotto users che chiamo user.service.ts (user al singolare)
    constructor (private service: UserService){ // (16) variabile di nome service di tipo private (vuol dire che la proprietà non è  accessibile dalle classi che ereditano dalla principale) della classe UserService; instanzio la classe come un dependancy injection, ma in questo caso no sa dove andare a prendere il servizio UserService, quindi bisogna dichiararlo come provider nel modulo app.module.ts
        // const service = new UserService(): se non mi accetta let per definire la variabile service e non è utilizzata in altre parti, allora posso settarla come const; UserService è la classe definita nel file user.service.ts
    }    
    ngOnInit (){
        this.users = this.service.getUsers(); // vado a popolare users con il servizio non instanziare mai una classe dentro un constructor ma meglio utilizzare un dependancy injection, che vuol dire che se una classe A dipende da un servizio o da una classe B, angular instanzia automaticamente la classe A (UserService); sarebbe ancora meglio fare la chiamata del metodo service.getusers una volta che il componente è stato inzializzato; Angolar ha degli hook cioè dei ganci in cui si verifica un evento e ci si può agganciare a quell'evento ad esempio la funzione oninit, Angular, una volta che il componente (o direttiva) è stato inizializzato, chiamerà automaticamente questa funzione (su angular.io cercare oninit). Ngonint è un metodo. (più semplicemente avremmo dovuto inizializzare la proprietà all'interno della classe passando il ritorno del metodo getUsers al valore users del componente che è un array)
    }
    onDeleteUser (user){
        alert (user.lastname)
    }
        //alert ("Conferma cancellazione prenotazione per " + user.name + " " + user.lastname);
         
    
}