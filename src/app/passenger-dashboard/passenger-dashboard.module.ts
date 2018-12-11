import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PassengerDashboardComponent} from './components/passenger-dashboard/passenger-dashboard.component';
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';
import {PassengerViewerComponent} from './components/passenger-viewer/passenger-viewer.component';
import {PassengerFormComponent} from './components/passenger-form/passenger-form.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [PassengerDashboardComponent, PassengerViewerComponent]
})
export class PassengerDashboardModule {
}
