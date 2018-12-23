import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Passenger} from '../models/passenger';
import {PassengerDashboardService} from './passenger-dashboard.service';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class PassengerDashboardResolver implements Resolve<Observable<Passenger[]>> {
  constructor(private dashboard: PassengerDashboardService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Passenger[]> {
    return this.dashboard.getPassengers();
  }
}
