import { UserInterface, userClass } from './interfaces/user-interface';
import { UserComponent } from './user/user.component';
import { Component } from '@angular/core';

// (111) con il comando da terminale ng pipe ucfirst posso creare un file di pipe (nome a caso, ad es. ucfirst) per fare una custom pipe; altrimenti aggiungo in users.component.html o qui:

import { Pipe, PipeTransform} from '@angular/core';
       @Pipe({
         name: 'ucfirst'
       })

        export class ucFirstPipe implements PipeTransform {
         transform (value:string): any {
            return value.split(' ')
            .map ((word:string) => ' ' + word.substr(0,1) 
            .toLocaleUpperCase() + '' + word.substr(1)) 
            .join('');
        }
    }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showTable: boolean = false; // (84) setto una variabile  showTable (Hidran chiama showForm) di tipo boolean (true or false) per poter mostrare la tabella solo nel momento in cui clicco il pulsante modifica (oppure il nuovo pusante aggiungi utente)
  title = 'TMS';
  titleList = 'user list retrieved from sap hr';
  userSelected: UserInterface = new userClass(); //(69) aggiungo userSelected che è di tipo UserInterface (Hidran lo chiama User); (83) instanzio una nuova classe userClass che ho definito in user-interface
  updateUser (user:UserInterface) //(70) chiamo il metodo updateUser perché l'utente che viene passato sarà quello selezionato
   {
    this.showTable = true; //(85) la variabile boolean viene settata a true solo se viene selezionato l'utente
    this.userSelected = user;
  }
  newUser(){ //(92) creo il metodo newUser
    this.userSelected = new userClass(); //(92) se  è stato selezionato un utente per la modifica, ad esempio, userSelected sarà uguale all'utente selezionato, ma se voglio creare un nuovo utente  devo reinizializzare userSelected come new userClass in modo tale che scompaia la tabella
    this.showTable = true; //(93) e quindi devo mostrare la tabella di inserimento 
  }
}
