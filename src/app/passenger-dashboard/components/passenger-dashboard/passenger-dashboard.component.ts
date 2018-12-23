import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private activatedRoute: ActivatedRoute, private passengerService: PassengerDashboardService, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(first()).subscribe((data) => {
      this.passengers = data.passengers;
    });
  }

  handleEdit(event: Passenger) {
    this.passengerService
      .updatePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      });
  }

  handleRemove(event: Passenger) {
    this.passengerService
      .removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => {
          return passenger.id !== event.id;
        });
      });
  }

  handleToCard(event: Passenger) {
    this.router.navigate(['passengers', event.id]);
  }
}
