import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //con l’autocomplete l’editor in automatico inserisce da dove deve importare il componente AppComponent from './app.component'
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms'; //(74) occorre aggiungere anche import FormsModule da @angular/forms per avere accesso a tutta la parte di form 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailComponent,  
    //UsersComponent // (5) istruisco Angular di caricare sia AppComponent che UsersComponent
    // con l'autocomplete l'editor in automatico inserisce l'istruzione import { UsersComponent } from './users/users.component';
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //(74) occorre aggiungere anche import FormsModule da @angular/forms
  ],
  providers: [UserService], // (17) aggiungo nei providers UserSevice
  bootstrap: [AppComponent],
})
export class AppModule { }
