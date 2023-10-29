import { Component } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  // styleUrls: ['']
})
export class TopBarComponent {
  constructor( private apiService: ApiService){ }
}