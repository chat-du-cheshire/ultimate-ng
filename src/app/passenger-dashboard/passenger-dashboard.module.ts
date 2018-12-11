import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PassengerDashboardComponent } from './components/passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent]
})
export class PassengerDashboardModule { }
