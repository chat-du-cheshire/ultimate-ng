import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PassengerDashboardComponent} from './components/passenger-dashboard/passenger-dashboard.component';
import {PassengerViewerComponent} from './components/passenger-viewer/passenger-viewer.component';
import {PassengerDashboardResolver} from './services/passenger-dashboard.resolver';
import {PassengerResolver} from './services/passenger.resolver';

const routes: Routes = [{
  path: 'passengers',
  children: [
    {
      path: '',
      component: PassengerDashboardComponent,
      pathMatch: 'full',
      resolve: {
        passengers: PassengerDashboardResolver
      }
    },
    {
      path: ':id',
      component: PassengerViewerComponent,
      resolve: {
        passenger: PassengerResolver
      }
    }
  ]
}];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class PassengerDashboardRoutingModule { }
