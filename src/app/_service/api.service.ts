import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

// Module
import Drink from '../_models/drink.model';
@Injectable({
 providedIn: 'root',
})

export class ApiService {
    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
    
    constructor(private http: HttpClient) {}

    getElencoDrinks(letter:string){
        return this.http.get(this.baseUrl + 'search.php?f=' + letter)
        .pipe( map( ( response:any ) => {
            return response.drinks as Drink[];
        }));
    }

    searchByFirtstLetter(firstLetter: string) {
        return this.http.get(this.baseUrl + 'search.php?f=' + firstLetter);
    }

    searchByLetter(letter: string){
        return this.http.get(this.baseUrl + 'search.php?f=' + letter);
    }

    searchCocktailByClick(idDrink: string){
        return this.http.get(this.baseUrl + 'search.php?f=' + idDrink);
    }
}