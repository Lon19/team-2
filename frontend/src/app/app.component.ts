import { Component } from '@angular/core';
import {ApiService} from './http/api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-project';
  variable: Observable<string>;

  constructor(apiService: ApiService) {
    this.variable = apiService.getJSON('helloworld/');
  }
}
