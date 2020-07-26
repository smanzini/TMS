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
//(122) aggiungo i widget di ngBootstrap con npm npm install @ng-bootstrap/ng-bootstrap e poi importo il modulo NgbModule 

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent, // (5) istruisco Angular di caricare sia AppComponent che UsersComponent
    // con l'autocomplete l'editor in automatico inserisce l'istruzione import { UsersComponent } from './users/users.component';
    UserComponent,
    UserDetailComponent,
    // (124) STEP 4 aggiungo NgdbCollapseNavbar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //(74) occorre aggiungere anche import FormsModule da @angular/forms
    FontAwesomeModule,
    NgbModule //(124) STEP 4 aggiungo fra gli imports il modulo NgbModule
   ],
   //(124) STEP 4 aggiungo exports: [NgdbCollapseNavbar]
  providers: [UserService], // (17) aggiungo nei providers UserSevice
  bootstrap: [AppComponent],
})
export class AppModule { }
