import { UserInterface } from './interfaces/user-interface';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TMS';
  userSelected: UserInterface; //(69) aggiungo userSelected che è di tipo UserInterface (Hidran lo chiama User)
  updateUser (user:UserInterface) //(70) chiamo il metodo updateUser perché l'utente che viene passato sarà quello selezionato
   {
this.userSelected = user;
  }
}
