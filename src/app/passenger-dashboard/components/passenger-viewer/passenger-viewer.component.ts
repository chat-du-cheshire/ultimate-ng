import {Component, OnInit} from '@angular/core';
import {PassengerDashboardService} from '../../services/passenger-dashboard.service';
import {Passenger} from '../../models/passenger';

@Component({
  selector: 'passenger-viewer',
  templateUrl: './passenger-viewer.component.html',
  styleUrls: ['./passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {

  public passenger: Passenger;

  constructor(private passengerSrv: PassengerDashboardService) {
  }

  ngOnInit() {
    this.passengerSrv.getPassenger(1).subscribe((data: Passenger) => this.passenger = data);
  }

  onUpdate(passenger) {
    this.passengerSrv.updatePassenger(passenger)
      .subscribe((result) => this.passenger = result);
  }

}
