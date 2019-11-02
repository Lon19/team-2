import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {
  DARK_THEME,
  DEFAULT_THEME, NbActionsModule,
  NbButtonModule, NbContextMenuModule, NbIconModule,
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
import {ECommerceModule} from "./e-commerce/e-commerce.module";
import {OrdersChartData} from "./e-commerce/charts-panel/orders-chart";
import {OrdersChartService} from "./e-commerce/charts-panel/orders-chart.service";
import {PeriodsService} from "./e-commerce/charts-panel/periods.service";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent
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
  ],
  providers: [
    ApiService,
    LayoutService,
    {provide: UserData, useClass: UserService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
