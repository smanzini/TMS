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
@Input()user: UserInterface; // (72) devo creare una variabile di tipo input per ricevere i dati dal form modifica, quindi user di tipo UserInterface
  //(88) devo iniettare il servizio UserService nel constructor, definendo la varibile private userServiceVar di tipo UserService, così mi crea automaticamente la variabile userServiceVar e la popola nel constructor (ovvero come this.userServiceVar = userServiceVar)

  //userServiceVar: UserService;
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
    resetTable () {// (96) creo il metodo resetTable e 
   if (this.user.id === 0) {
     this.user = new userClass(); //(96) ripopolo la variabile
                           }
  }
}
