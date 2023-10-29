import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Page
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './pagina-dettaglio/pagina-dettaglio.component';
import { PageNotFound } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dettaglio', component: DettaglioComponent},
  { path: '**',   component: PageNotFound }, // redirect to `first-component`
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }