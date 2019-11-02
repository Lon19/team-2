import {Injectable} from '@angular/core';
import {ApiService} from '../../http/api.service';
import {Observable} from 'rxjs';
import {MentalHealthQuestionnaire} from './mentalHealthQuestionnaire';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MentalHealthService {
  constructor(public apiService: ApiService) {
  }

  private static calculateMentalHealthScore(
    questionnaire: MentalHealthQuestionnaire
  ): MentalHealthQuestionnaire {

    const depression = this.getScoreForDepression(questionnaire);
    const anxiety = this.getScoreForAnxiety(questionnaire);
    const stress = this.getScoreForStress(questionnaire);
    questionnaire.anxiety = anxiety;
    questionnaire.depression = depression;
    questionnaire.stress = stress;

    return questionnaire;
  }

  private static getScoreForDepression(questions: MentalHealthQuestionnaire): number {
    return this.getAnswerScore(questions.q3) +
      this.getAnswerScore(questions.q5) +
      this.getAnswerScore(questions.q10) +
      this.getAnswerScore(questions.q16) +
      this.getAnswerScore(questions.q17) +
      this.getAnswerScore(questions.q21) * 2;

  }

  private static getScoreForAnxiety(questions: MentalHealthQuestionnaire): number {
    return this.getAnswerScore(questions.q2) +
      this.getAnswerScore(questions.q4) +
      this.getAnswerScore(questions.q7) +
      this.getAnswerScore(questions.q9) +
      this.getAnswerScore(questions.q15) +
      this.getAnswerScore(questions.q19) +
      this.getAnswerScore(questions.q20) * 2;
  }

  private static getScoreForStress(questions: MentalHealthQuestionnaire): number {
    return this.getAnswerScore(questions.q1) +
      this.getAnswerScore(questions.q6) +
      this.getAnswerScore(questions.q8) +
      this.getAnswerScore(questions.q11) +
      this.getAnswerScore(questions.q12) +
      this.getAnswerScore(questions.q14) +
      this.getAnswerScore(questions.q18) * 2;
  }

  private static getAnswerScore(answer: string): number {
    if (answer.includes('Did not')) {
      return 0;
    } else if (answer.includes('some degree')) {
      return 1;
    } else if (answer.includes('considerable')) {
      return 2;
    } else if (answer.includes('very much')) {
      return 3;
    } else {
      console.error('Cannot rate mentah question');
    }
  }

  getHealthPlan(uid: number): Observable<MentalHealthQuestionnaire[]> {
    const questionnaire = this.apiService.getJSON<MentalHealthQuestionnaire[]>('q/mental-health/' + uid + '/');

    return questionnaire.pipe(
      take(1),
      map(value => {
        return value.sort((quest1, quest2 ) =>  (new Date(quest1.date) as any) - (new Date(quest2.date) as any)).map(element => {
          return MentalHealthService.calculateMentalHealthScore(element);
        });
      })
    );
  }
}
