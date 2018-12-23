import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {Passenger} from '../../models/passenger';
import {ActivatedRoute} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  public passenger: Passenger;

  constructor(private passengerSrv: PassengerDashboardService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data.pipe(first()).subscribe((data) => {
      this.passenger = data.passenger;
    });
  }

  onUpdate(passenger) {
    this.passengerSrv.updatePassenger(passenger)
      .subscribe((result) => this.passenger = result);
  }

}
