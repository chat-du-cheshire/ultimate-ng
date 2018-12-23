import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Passenger} from '../models/passenger';
import {PassengerDashboardService} from './passenger-dashboard.service';

@Injectable({providedIn: 'root'})
export class PassengerResolver implements Resolve<Observable<Passenger>> {
  constructor(private passengerDashboard: PassengerDashboardService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Passenger> {
    return this.passengerDashboard.getPassenger(route.params.id);
  }
}
