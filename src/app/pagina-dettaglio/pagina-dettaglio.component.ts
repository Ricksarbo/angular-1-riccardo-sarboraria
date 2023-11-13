import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './pagina-dettaglio.component.html',
})
export class DettaglioComponent implements OnInit {
  drinks: any = [];

  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    const observable = this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15200')
    observable.subscribe( (response: any) => {
        this.drinks = response.drinks;
        // this.drink = this.drinks[0];
    });
  }

  // salva(){
  //   this.http.post('URL_SALVATAGGIO', this.drink)
  //   .subscribe( (response: any) => {

  //   })
  // }
}