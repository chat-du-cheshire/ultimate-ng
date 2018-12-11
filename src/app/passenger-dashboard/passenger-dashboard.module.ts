import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PassengerDashboardComponent} from './components/passenger-dashboard/passenger-dashboard.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerViewerComponent} from './components/passenger-viewer/passenger-viewer.component';

@NgModule({
  declarations: [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent, PassengerViewerComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent, PassengerViewerComponent]
})
export class PassengerDashboardModule {
}
