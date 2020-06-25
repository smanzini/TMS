import { UserService } from './users/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //con l’autocomplete l’editor in automatico inserisce da dove deve importare il componente AppComponent from './app.component'
import { UsersComponent } from './users/users.component';
//

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,  
    //UsersComponent // (5) istruisco Angular di caricare sia AppComponent che UsersComponent
    // con l'autocomplete l'editor in automatico inserisce l'istruzione import { UsersComponent } from './users/users.component';
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService], // (17) aggiungo nei providers UserSevice
  bootstrap: [AppComponent],
})
export class AppModule { }
