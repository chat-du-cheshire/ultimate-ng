import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Passenger} from '../models/passenger';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

const PASSENGER_API = `${environment.apiUrl}/passengers`;

@Injectable({
  providedIn: 'root'
})
export class PassengerDashboardService {

  constructor(private http: HttpClient) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGER_API)
      .pipe(catchError((error: any) => throwError(error)));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.http
      .get<Passenger>(`${PASSENGER_API}/${id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }


  updatePassenger(passenger: Passenger): Observable<Passenger> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http
      .put<Passenger>(`${PASSENGER_API}/${passenger.id}`, passenger, {headers})
      .pipe(catchError((error: any) => throwError(error)));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .delete<Passenger>(`${PASSENGER_API}/${passenger.id}`)
      .pipe(catchError((error: any) => throwError(error)));
  }

}
