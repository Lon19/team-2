import {ChangeDetectionStrategy, Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../http/api.service';
import {Observable} from 'rxjs';

// Mark: Card Details
export class CardComponentDetails {
  title: string;
  overallScore: string;
  description?: string;
  buttonText: string;
  id: number;

  // The id in this constructor may be removed if the endpoints sends an identifier
  constructor(response: Observable<string>, id: number) {
    this.id = id;
    if (response != null) {
      this.overallScore = '5';
      this.changeDescriptionBasedOnScoreAndId(this.id);
    } else {
      this.title = 'Section title';
      this.overallScore = '--';
      this.description = 'Could not retrieve data. Please refresh page!';
    }
    this.buttonText = 'Reveal';
  }

  changeDescriptionBasedOnScoreAndId(id: number) {
    switch (id) {
      case 0:
        this.changeMentalHealthMessage();
        break;
      case 1:
        this.changeAdjustmentsMessage();
        break;
      case 2:
        this.changeSelfConfidenceMessage();
        break;
      default:
        this.changeOrganizationalMessage();
        break;
    }
  }

  changeMentalHealthMessage() {
    const intScore = +this.overallScore;
    if (intScore <= 2) {
      this.description = 'Hey warrior, keep going! The sun will rise and we will try again!';
    } else {
      if (intScore >= 3) {
        this.description = 'Good job! Keep going! Your story is not over yet!';
      } else {
        this.description = 'When it rains, look for rainbows! When it is dark, look for stars!';
      }
    }
  }

  changeSelfConfidenceMessage() {
    const intScore = +this.overallScore;
    if (intScore <= 2) {
      this.description = 'I already know what giving up feels like! I want to see what happens if I do not!';
    } else {
      if (intScore >= 3) {
        this.description = 'You have got what it takes, but it will take everything you got';
      } else {
        this.description = 'Be strong because things will get better. t may be stormy now but it never rains forever!';
      }
    }
  }

  changeAdjustmentsMessage() {
    const intScore = +this.overallScore;
    if (intScore <= 2) {
      this.description = 'Happiness comes from some... curious adjustment in life!';
    } else {
      if (intScore >= 3) {
        this.description = 'You may not know this but people like you make me happy when they are happy!';
      } else {
        this.description = 'Adjustment is a difficult thing in life to do but it makes you successful!';
      }
    }
  }

  changeOrganizationalMessage() {
    const intScore = +this.overallScore;
    if (intScore <= 2) {
      this.description = 'When you feel like quitting, think why you started!';
    } else {
      if (intScore >= 3) {
        this.description = 'Nothing worth having comes easy, but you are on the right track!';
      } else {
        this.description = 'It always seems impossible until it is done!';
      }
    }
  }
}

// Mark: Card provider
@Injectable()
export class CardComponentProvider {
  private readonly cardComponentDetails: CardComponentDetails = null;
  private endpoint = 'Insert Endpoint Link Here';

  constructor(apiService: ApiService, endpointId: number) {
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
    this.cardComponentDetails = new CardComponentDetails(apiService.getJSON(this.endpoint), endpointId);
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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
