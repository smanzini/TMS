import { UserInterface, userClass } from './../interfaces/user-interface';
//(50) creo da riga di comando il componente user-detail che serve per le operazioni di modifica sulla destra della tabella, con il comando da terminale ng generate component user-detail (o abbreviato ng g c user-detail)
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail', //(51) leggo qui con che nome è stato creato il componente, ovvero il selettore 'app-user-detail' e questo sarà il tag che dovrò richiamare nel mio app.component.html
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: UserInterface; //(101) creo una copia dell'oggetto user
  private _user: UserInterface; //(102) creo un'altra variabile private _user e poi faccio un SETTER e GETTER di questa variabile
  @Input() set user(user: UserInterface){ // (72) devo creare una variabile di tipo input per ricevere i dati dal form modifica, quindi user di tipo UserInterface
  //(88) devo iniettare il servizio UserService nel constructor, definendo la varibile private userServiceVar di tipo UserService, così mi crea automaticamente la variabile userServiceVar e la popola nel constructor (ovvero come this.userServiceVar = userServiceVar)
  //(102) uso la funzione SET (SETTER) che riceve un user di tipo UserInterface
  this._user = user; //(103) definisco la variabile private _user come uguale a user 
  this.userCopy = Object.assign({},user);//(104) mappo anche userCopy facendomi una copia di user con object assign, ovvero assegna il valore di destra user al valore di sinistra che in questo caso è vuoto; quindi per un utente già esistente, per non perdere i parametri originali, li assegno a userCopy e quando clicco RESET, la variabile private _user ritorna uguale alla copia userCopy (copia dell'originale)
  
  }
  get user() { //(105) mapo anche la funzione GETTER 
    return this._user;
  }
constructor(private userServiceVar: UserService) { 
  //this.userServiceVar = userServiceVar;
}

  ngOnInit(): void {
  }
  saveUser(){ //(79) inserisco il metodo saveUser e metto un alert indicando l'utente
    if(this.user.id >0) {
      this.userServiceVar.updateUser(this.user); //(91) quindi vado ad aggiornare l'utente user //(87) se id è > 0 allora l'utente esiste già e quindi devo aggiornare l'utente chiamando il servizio UserService, altrimenti devo salvare un nuovo utente
    } else { //(95) se l'utente ha id =0 allora vuol dire che è un nuovo utente, quindi chiamo il metodo createUser
      this.userServiceVar.createUser(this.user);
          }
    
            }
    resetTable (form) {// (96) creo il metodo resetTable e 
   if (this.user.id === 0) {
     this.user = new userClass(); //(96) ripopolo la variabile user (Hidran chama User la userClass)
                           } else {
                          this.user = this.userCopy; //(100) se l'id non è zero, quindi è un utente esistente, allora cancello la tabella accedendo al form (ngForm) con form.reset; (106) Quindi per un utente già esistente, per non perdere i parametri originali, li assegno a userCopy e QUI quando clicco RESET, la variabile private _user ritorna uguale alla copia userCopy (copia dell'originale)
                           }
  }
}
