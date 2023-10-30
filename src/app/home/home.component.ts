import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent implements OnInit {
  drinks: any  = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.searchByLetter("a")
    .subscribe( (response: any) => {
          console.log(response);
          this.drinks = response.drinks;
        });
  }
}