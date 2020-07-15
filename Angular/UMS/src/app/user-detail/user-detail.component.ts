import { UserInterface } from './../interfaces/user-interface';
//(50) creo da riga di comando il componente user-detail che serve per le operazioni di modifica sulla destra della tabella, con il comando da terminale ng generate component user-detail (o abbreviato ng g c user-detail)
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-detail', //(51) leggo qui con che nome è stato creato il componente, ovvero il selettore 'app-user-detail' e questo sarà il tag che dovrò richiamare nel mio app.component.html
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
@Input()user: UserInterface; // (72) devo creare una variabile di tipo input per ricevere i dati dal form modifica, quindi user di tipo UserInterface
  
constructor() { }

  ngOnInit(): void {
  }
  saveUser(){ //(79) inserisco il metodo saveUser e metto un alert indicando l'utente
    alert(this.user.id) 
  }
}
