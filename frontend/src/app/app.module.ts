import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  DARK_THEME,
  DEFAULT_THEME, NbActionsModule,
  NbButtonModule, NbCardModule, NbContextMenuModule, NbIconModule,
  NbLayoutModule,
  NbMenuModule, NbSearchModule, NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
  NbThemeService, NbUserModule
} from '@nebular/theme';
import {MenuComponent} from './menu/menu.component';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './http/api.service';
import {HeaderComponent} from './header/header.component';
import {LayoutService} from './services/layout.service';
import {ThemeModule} from './theme.module';
import {UserData} from './user/users';
import {UserService} from './user/users.service';
import {CardComponent, CardComponentProvider} from './card-view/card.component';
import {ECommerceModule} from './e-commerce/e-commerce.module';
import {MentalHealthService} from './logic/mentalHealth/mentalHealthService';
import {ChartjsRadarComponent} from './charts/chartjs/chartjs-radar.component';
import {ChartjsComponent} from './charts/chartjs/chartjs.component';
import {ChartModule} from 'angular2-chartjs';
import { MentalHealthComponent } from './mental-health/mental-health.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    ChartjsRadarComponent,
    ChartjsComponent,
    HeaderComponent,
    CardComponent,
    MentalHealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbLayoutModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbEvaIconsModule,
    HttpClientModule,
    NbActionsModule,
    NbSearchModule,
    NbSelectModule,
    NbIconModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    ECommerceModule,
    NbCardModule,
    ChartModule,
    NbButtonModule,
    NbCardModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    LayoutService,
    CardComponentProvider,
    MentalHealthService,
    {provide: UserData, useClass: UserService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
