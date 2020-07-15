import { UserInterface, userClass } from './interfaces/user-interface';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTable: boolean = false; // (84) setto una variabile  showTable (Hidran chiama showForm) di tipo boolean (true or false) per poter mostrare la tabella solo nel momento in cui clicco il pulsante modifica (oppure il nuovo pusante aggiungi utente)
  title = 'TMS';
  userSelected: UserInterface = new userClass(); //(69) aggiungo userSelected che è di tipo UserInterface (Hidran lo chiama User); (83) instanzio una nuova classe userClass che ho definito in user-interface
  updateUser (user:UserInterface) //(70) chiamo il metodo updateUser perché l'utente che viene passato sarà quello selezionato
   {
    this.showTable = true; //(85) la variabile boolean viene settata a true solo se viene selezionato l'utente
    this.userSelected = user;
  }
}
