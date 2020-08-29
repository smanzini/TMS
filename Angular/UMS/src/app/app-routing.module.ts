import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//(129) metto import Routes e RouterModule per le rotte di Angular (in realtà era stato già inserito creando il file app-routing.module.ts quando ho creato applicazione Angular che mi aveva chiesto se installare anche il Routing)

const routes: Routes = [ // è un array di dati 
{
  path:'users', //(129) che path nell'url dopo la barra
  component: UsersComponent // (129) inserisco il componente che voglio venga mostrato con questa rotta
},
{
  path:' ', //(131) Inserisco un'altra rotta ma lascio lo spazio vuoto (perché nella pagina principale che leggo in index.hmtl è scritto <base href="/"> cioè la pagina principale inizia già con /, quindi devo lasciare spazio vuoto) e inserisco un redirectTo che vuol dire che se inserita la / viene rediretto sulla rotta users
  pathMatch: 'full', //vuol dire che deve coincidere perfettamente
  redirectTo: 'users'
},
{
  path:'users/new', //(130) Inserisco un'altra rotta che ha il path users/new nell'url dopo la barra
  component: UserDetailComponent // inserisco il componente che voglio venga mostrato con questa rotta; qui Hydran inserisce UserComponent MA poi si vede (mica lo dice lui!!!) che ha cambiato in UserDetailComponent, anche perché non è possibile che venga richiamato lo stesso componente sia per mostrare gli utenti esistenti che per crearne uno nuovo!
},
{
  path:'users/:id/edit', //(138) Inserisco un'altra rotta per EDIT che cattura il parametro id, con un servizio che ha RouterModule, che si chiama activatedRoute per leggere il parametro in user-detail.component.ts
  component: UserDetailComponent // (138) inserisco il componente che voglio venga mostrato con questa rotta; se è esistente lo prendo da user-detail.component.ts, altrimenti lo inizializzo 
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //(132) passo l'elenco di rotte al module RouterModule forRoot (per le rotte principali dell'app; in alternativa sarebbe for child) e poi inserisco l'array di rotte, ovvero routes; dobbiamo anche dire quando clicchiamo sul link dove andare a caricare i moduli e poi mettere i link che puntano ai rispettivi url 
  exports: [RouterModule]
})
export class AppRoutingModule { } 
