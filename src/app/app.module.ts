import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

//Page
import { HomeComponent } from './home/home.component';
import { DettaglioComponent } from './pagina-dettaglio/pagina-dettaglio.component';
import { PageNotFound } from './page-not-found/page-not-found.component'
//Components
import { TopBarComponent } from './top-bar/top-bar.component';
//Providers
import { ApiService } from './_service/api.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
   
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFound,
    DettaglioComponent,
    TopBarComponent,
  ],
  providers:[
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
