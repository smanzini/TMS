import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; //con l’autocomplete l’editor in automatico inserisce da dove deve importare il componente AppComponent from './app.component'
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {FormsModule} from '@angular/forms'; //(74) occorre aggiungere anche import FormsModule da @angular/forms per avere accesso a tutta la parte di form 
import '@angular/common/locales/global/it'; //(109)importo i local data per IT 8 vedere guida ‘internationalization’ https://angular.io/guide/i18n 
// import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // (124) STEP 4 aggiungo import NgbModule
//(122) aggiungo i widget di ngBootstrap con npm install @ng-bootstrap/ng-bootstrap e poi importo il modulo NgbModule 
import { NgbdModalBasic } from './modal-basic/modal-basic.component'; //(125) *** info per FINESTRA MODALE che NON c'è sul sito (https://ng-bootstrap.github.io/#/components/modal/examples) perché nel codice c'è solo modal-basic-html e modal-basic.ts MA se si apre la finestra StackBlitz si vede nel codice anche modal-basic.module.ts, che è da inserire QUI (app.module.ts), ovvero -> import NgdbModalBasic come da esempio ngBootstrap 
// la FINESTRA MODALE può essere usata ad esempio per inserire il form della tabella degli utenti


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent, // (5) istruisco Angular di caricare sia AppComponent che UsersComponent
    // con l'autocomplete l'editor in automatico inserisce l'istruzione import { UsersComponent } from './users/users.component';
    UserComponent,
    UserDetailComponent, // il componente UserDetailComponent serve per le operazioni di modifica dell'utente (edit)
    NgbdModalBasic,
    // (124) STEP 4 aggiungo NgdbCollapseNavbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //(74) occorre aggiungere anche import FormsModule da @angular/forms
    FontAwesomeModule,
    NgbModule, //(124) STEP 4 aggiungo fra gli imports il modulo NgbModule
   ],
   //(124) STEP 4 aggiungo exports: [NgdbCollapseNavbar]
   exports: [NgbdModalBasic],
   providers: [UserService], // (17) aggiungo nei providers UserSevice
  bootstrap: [AppComponent, NgbdModalBasic],
})
export class AppModule { }
export class NgbdModalBasicModule {}
