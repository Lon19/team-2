import { NgModule } from '@angular/core';
import {
  NbButtonModule,
  NbCardModule,
  NbProgressBarModule,
  NbTabsetModule,
  NbUserModule,
  NbIconModule,
  NbSelectModule,
  NbListModule,
} from '@nebular/theme';
import {ThemeModule} from "../theme.module";
import {ECommerceComponent} from "./e-commerce.component";
import {ChartModule} from "angular2-chartjs";
import {NgxEchartsModule} from "ngx-echarts";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {ECommerceChartsPanelComponent} from "./charts-panel/charts-panel.component";
import {OrdersChartComponent} from "./charts-panel/charts/orders-chart.component";
import {ChartPanelSummaryComponent} from "./charts-panel/chart-panel-summary/chart-panel-summary.component";
import {ChartPanelHeaderComponent} from "./charts-panel/chart-panel-header/chart-panel-header.component";
import {ProfitChartComponent} from "./charts-panel/charts/profit-chart.component";
import {ECommerceLegendChartComponent} from "./legend-chart/legend-chart.component";
import {OrdersProfitChartData} from "./charts-panel/orders-profit-chart";
import {OrdersProfitChartService} from "./charts-panel/orders-profit-chart.service";
import {OrdersChartData} from "./charts-panel/orders-chart";
import {OrdersChartService} from "./charts-panel/orders-chart.service";
import {PeriodsService} from "./charts-panel/periods.service";
import {ProfitChartData} from "./charts-panel/profit-chart";
import {ProfitChartService} from "./charts-panel/profit-chart.service";

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
    NbTabsetModule,
    NbSelectModule,
    NbListModule,
    ChartModule,
    NbProgressBarModule,
    NgxEchartsModule,
    NgxChartsModule,
    LeafletModule,
  ],
  declarations: [
    ECommerceComponent,
    ECommerceChartsPanelComponent,
    ChartPanelHeaderComponent,
    ChartPanelSummaryComponent,
    OrdersChartComponent,
    ProfitChartComponent,
    ECommerceLegendChartComponent
  ],
  exports: [
    ECommerceChartsPanelComponent
  ],
  providers: [
    PeriodsService,
    { provide: OrdersProfitChartData, useClass: OrdersProfitChartService },
    { provide: OrdersChartData, useClass: OrdersChartService },
    { provide: ProfitChartData, useClass: ProfitChartService },
  ]
})
export class ECommerceModule { }
