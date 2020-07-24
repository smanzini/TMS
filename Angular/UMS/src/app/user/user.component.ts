import { AppComponent } from './../app.component';
import { UserInterface } from './../interfaces/user-interface';
import { UserService } from '../services/user.service'; //(28) in automatico mi fa import dopo che ho inserito nel constructor la dipendenza UserService
// (20) Da terminal con il comando ng generate component user (oppure abbreviato ng g c user) creo un altro componente, simile al componente users che ho generato e mi crea automaticamente tutti i file sotto user: user.component.css, user.component.html, user.component.spec.ts, user.component.ts e crea anche la declaration in app.module.ts e l’import

import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
//(35) viene importato automaticamente da Angular core il gestore eventi
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons';  
import { icon } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'tr [app-user]', // (24)seleziona elemento tr che ha attributo app-user,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input ('user-data') user: UserInterface; // (44) tipicizzo la variabile user di tipo UserInterfae e se utilizzassi il comando this.users. avrei accesso a tutti i parametri e metodi dell'array (23) occorre dichiarare la variabile user nel componente ts del componente figlio e definirla di tipo input cioè che riceve dati dall'esterno; definisco un alias 'user-data' perché se un domani andrò a cambiare il nome della variabile user, l'alias user-data non cambierà
@Output ('onDeleteUser') userDelete = new EventEmitter();
@Output ('onSelectUser') onSelectUser = new EventEmitter();
//@Output ('onDeleteUser') userDelete new EventEmitter(); (34) dichiaro la variabile output per definire un evento esterno (userDelete) con un alias 'onDeleteuser' e inizializzo la variabile come un evento new (perché è una nuova istanza) di EventEmitter che è un gestore eventi che si trova in Angular core
//@Output ('userSelected') onSelectUser = new EventEmitter(); //(64) inserisco @Output anche l'evento esterno come alias onSelectUser
  
constructor(private userService: UserService) { } //(28) se voglio eliminare uno user, devo inserire come dipendenza nel constructor la classe userService di tipo UserService

  ngOnInit() {
              }
deleteUser (){ //(27) aggiungo un metodo deleteUser che riceve il valore user
  //alert ("Conferma cancellazione prenotazione per " + this.user.name + " " + this.user.lastname) -> metto il messaggio nel componente padre in users.component.ts
  this.userDelete.emit(this.user);
   // (35) creo l'evento userDelete con il comando emit che richiama il gestore eventi EventEmitter e cancello this.user; ora devo ASCOLTARE questo evento nel componente padre in users.component.html e quando accadrà questo evento sarà il padre che chiamerà il metodo 

  //this.userService.deleteUser(this.user); //(32) chiamo il metodo deleteUser (dalla classe userService per cancellare this.user) (33) NEW faccio richiamare il metodo direttamente dal componente padre (users)
              }

  updateUser (){  //(63) inserisco il metodo updateUser
  this.onSelectUser.emit (this.user);
                  }
                }
