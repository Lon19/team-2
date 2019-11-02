import { Component } from '@angular/core';
import {ApiService} from './http/api.service';
import {Observable} from 'rxjs';
import {MentalHealthService} from './logic/mentalHealth/mentalHealthService';
import {MentalHealthQuestionnaire} from './logic/mentalHealth/mentalHealthQuestionnaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-new-project';
}
