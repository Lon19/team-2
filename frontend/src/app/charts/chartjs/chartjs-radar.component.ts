import {Component, OnDestroy} from '@angular/core';
import {NbThemeService, NbColorHelper} from '@nebular/theme';
import {MentalHealthService} from '../../logic/mentalHealth/mentalHealthService';

@Component({
  selector: 'ngx-chartjs-radar',
  template: `
      <chart type="radar" [data]="data" [options]="options"></chart>
  `,
})
export class ChartjsRadarComponent implements OnDestroy {
  options: any;
  data: {};
  themeSubscription: any;

  constructor(private theme: NbThemeService,
              mentalHealthService: MentalHealthService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      mentalHealthService.getHealthPlan(22222222).subscribe(questionaires => {
          const colors: any = config.variables;
          const chartjs: any = config.variables.chartjs;
          const lastQuestionaire = questionaires[questionaires.length - 1];
          const lastlastQuestionaire = questionaires[questionaires.length - 2];

          this.data = {
            labels: ['Depression', 'Anxiety', 'Stress'],
            datasets: [{
              data: [lastQuestionaire.depression, lastQuestionaire.anxiety, lastQuestionaire.stress],
              label: 'Last questionnaire results',
              borderColor: colors.danger,
              backgroundColor: NbColorHelper.hexToRgbA(colors.dangerLight, 0.5),
            }, {
              data: [lastlastQuestionaire.depression, lastlastQuestionaire.anxiety, lastlastQuestionaire.stress],
              label: 'Last but one questionnaire',
              borderColor: colors.warning,
              backgroundColor: NbColorHelper.hexToRgbA(colors.warningLight, 0.5),
            }],
          };

          this.options = {
            responsive: true,
            maintainAspectRatio: false,
            scaleFontColor: 'white',
            legend: {
              labels: {
                fontColor: chartjs.textColor,
              },
            },
            scale: {
              pointLabels: {
                fontSize: 14,
                fontColor: chartjs.textColor,
              },
              gridLines: {
                color: chartjs.axisLineColor,
              },
              angleLines: {
                color: chartjs.axisLineColor,
              },
            },
          };
        }
      );
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
