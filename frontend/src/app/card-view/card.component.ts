import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../http/api.service';
import {Observable} from 'rxjs';

// Mark: Card Details
export class CardComponentDetails {
  title: string;
  overallScore: string;
  description?: string;
  buttonText: string;

  constructor(response: Observable<string>) {
    if (response != null) {
      this.overallScore = '5';
      this.description = 'Description';
    } else {
      this.title = 'Section title';
      this.overallScore = '--';
      this.description = 'Could not retrieve data. Please refresh page!';
    }
    this.buttonText = 'Expand';
  }
}

// Mark: Card provider
@Injectable()
export class CardComponentProvider {
  private readonly cardComponentDetails: CardComponentDetails = null;
  private endpoint = 'Insert Endpoint Link Here';

  // tslint:disable-next-line:ban-types
  constructor(apiService: ApiService, endpointId: Number) {
    switch (endpointId) {
      case 0:
        this.endpoint = '';
        break;
      case 1:
        this.endpoint = '';
        break;
      case 2:
        this.endpoint = '';
        break;
      default:
        this.endpoint = '';
        break;
    }
    this.cardComponentDetails = new CardComponentDetails(apiService.getJSON(this.endpoint));
  }

  public getCardComponentDetails(): CardComponentDetails {
    return this.cardComponentDetails;
  }
}

// Mark: Cart Component
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  card1ComponentModel: CardComponentDetails;
  card2ComponentModel: CardComponentDetails;
  card3ComponentModel: CardComponentDetails;
  card4ComponentModel: CardComponentDetails;

  constructor(apiService: ApiService) {
    const provider1 = new CardComponentProvider(apiService, 0);
    this.card1ComponentModel = provider1.getCardComponentDetails();
    const provider2 = new CardComponentProvider(apiService, 1);
    this.card2ComponentModel = provider2.getCardComponentDetails();
    const provider3 = new CardComponentProvider(apiService, 2);
    this.card3ComponentModel = provider3.getCardComponentDetails();
    const provider4 = new CardComponentProvider(apiService, 3);
    this.card4ComponentModel = provider4.getCardComponentDetails();
  }

  ngOnInit() { }
}
