import { Component } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
})

export class PageNotFound{
  constructor( private apiService: ApiService){ }
}