import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MentalHealthComponent} from './mental-health/mental-health.component';
import {CardComponent} from './card-view/card.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: CardComponent},
  { path: 'health', component: MentalHealthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
