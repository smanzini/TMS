import { UserInterface, userClass } from './../interfaces/user-interface';
//(50) creo da riga di comando il componente user-detail che serve per le operazioni di modifica sulla destra della tabella, con il comando da terminale ng generate component user-detail (o abbreviato ng g c user-detail)
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail', //(51) leggo qui con che nome è stato creato il componente, ovvero il selettore 'app-user-detail' e questo sarà il tag che dovrò richiamare nel mio app.component.html
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private userCopy: UserInterface; //(101) creo una copia dell'oggetto user
  private _user: UserInterface; //(102) creo un'altra variabile private _user e poi faccio un SETTER e GETTER di questa variabile
  @Input() set user(user: UserInterface){ // (72) devo creare una variabile di tipo input per ricevere i dati dal form modifica che scatena un evento, quindi user di tipo UserInterface
  //(88) devo iniettare il servizio UserService nel constructor, definendo la varibile private userServiceVar di tipo UserService, così mi crea automaticamente la variabile userServiceVar e la popola nel constructor (ovvero come this.userServiceVar = userServiceVar)
  //(102) uso la funzione SET (SETTER) che riceve un user di tipo UserInterface
  this._user = user; //(103) definisco la variabile private _user come uguale a user 
  this.userCopy = Object.assign({},user);//(104) mappo anche userCopy facendomi una copia di user con object assign, ovvero assegna il valore di destra user al valore di sinistra che in questo caso è vuoto; quindi per un utente già esistente, per non perdere i parametri originali, li assegno a userCopy e quando clicco RESET, la variabile private _user ritorna uguale alla copia userCopy (copia dell'originale)
  
  }
  get user() { //(105) mapo anche la funzione GETTER 
    return this._user;
  }
constructor(private userServiceVar: UserService, private routeVar: ActivatedRoute) { 
  //this.userServiceVar = userServiceVar;
  //(142) creo una variabile privata che chiamo routeVar (Hydran la chiama route) di tipo ActivatedRoute (che è un servizio del RouterModule) -> private routeVar: ActivatedRoute
}

  ngOnInit() { //(141) tolto :void
      this.user = new userClass(); //(141) LEZIONE 43 quando carico questo componente se non c'è un utente selezionato, allora carico un nuovo utente (Hydran lo chiama User, io lo chiamo userClass)
      this.routeVar.params.subscribe
      //(142) non appena viene attivata questa rotta utilizzo il servizio ActivatedRoute (con subscribe, il comando this.routeVar.params.subscribe è fisso nel senso che params è il comando da dare) e così accedo alla variabile che posso chiamare come voglio, in questo caso paramsId (sotto) per recuperare l'ID che viene passato dalla rotta; 
      (params => {
        // alert (" params id o utente " + params.id);
        this.user = this.userServiceVar.getUser(+params.id); // + per il cast ad integer, numero intero
      }); // (143) VEDI su https://angular.io/guide/router#getting-route-information -> this.user = params ['user']
        //(143) paramsId) => { this.user = this.userServiceVar.getUsers(paramsId.id); inizializzo l'utente caricando l'utente che si trova a quell'ID con -> avevamo già creato getUsers in user.service.ts con ID che partiva da 1 per il primo utente; ORA bisgna creare anche getUser per il singolo utente con l'id
              }    
             
  saveUser(){ //(79) inserisco il metodo saveUser e metto un alert indicando l'utente
    if(this.user.id >0) {
      this.userServiceVar.updateUser(this.user); //(91) quindi vado ad aggiornare l'utente user //(87) se id è > 0 allora l'utente esiste già e quindi devo aggiornare l'utente chiamando il servizio updateUser, altrimenti devo salvare un nuovo utente
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
