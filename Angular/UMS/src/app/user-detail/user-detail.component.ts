//(50) creo da riga di comando il componente user-detail che serve per le operazioni di modifica sulla destra della tabella, con il comando da terminale ng generate component user-detail (o abbreviato ng g c user-detail)
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail', //(51) leggo qui con che nome è stato creato il componente, ovvero il selettore 'app-user-detail' e questo sarà il tag che dovrò richiamare nel mio app.component.html
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
