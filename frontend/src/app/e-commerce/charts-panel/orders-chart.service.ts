import {Injectable} from '@angular/core';
import {OrdersChart, OrdersChartData} from './orders-chart';
import {PeriodsService} from './periods.service';
import {Observable} from 'rxjs';
import {MentalHealthQuestionnaire} from '../../logic/mentalHealth/mentalHealthQuestionnaire';
import {ApiService} from '../../http/api.service';
import {MentalHealthService} from '../../logic/mentalHealth/mentalHealthService';
import {map, take} from 'rxjs/operators';
import {createTypeQueryNode} from '@schematics/angular/third_party/github.com/Microsoft/TypeScript/lib/typescript';

@Injectable()
export class OrdersChartService extends OrdersChartData {

  private year = [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
  ];
  private mental: Observable<MentalHealthQuestionnaire[]>;
  private data = {};

  constructor(private period: PeriodsService,
              mentalHealthService: MentalHealthService) {
    super();
    this.mental = mentalHealthService.getHealthPlan(22222222);

    this.data = {
      week: this.getDataForWeekPeriod(),
      month: this.getDataForWeekPeriod(),
      year: this.getDataForWeekPeriod(),
    };
  }

  private getDataForWeekPeriod(): Observable<OrdersChart> {
    return this.mental.pipe(
      take(1),
      map(questionaires => {
          const points = questionaires.length;
          const chartLabel = this.getDataLabels(points, questionaires.map(it => it.date));

          const depression = questionaires.map(quest => quest.depression);
          const anxiety = questionaires.map(quest => quest.anxiety);
          const stress = questionaires.map(quest => quest.stress);
          const linesData = Array.of(depression, anxiety, stress);

          return {chartLabel, linesData};
        }
      )
    );
  }

  getDataLabels(nPoints: number, labelsArray: Date[]): string[] {
    const labelsArrayLength = labelsArray.length;
    const step = Math.round(nPoints / labelsArrayLength);

    return Array.from(Array(nPoints)).map((item, index) => {
      const dataIndex = Math.round(index / step);

      return index % step === 0 ? new Date(labelsArray[dataIndex]).toLocaleDateString() : '';
    });
  }

  getOrdersChartData(period: string): Observable<OrdersChart> {
    return this.data[period];
  }
}
