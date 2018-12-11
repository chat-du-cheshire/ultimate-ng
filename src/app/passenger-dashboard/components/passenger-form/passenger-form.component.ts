import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passenger} from '../../models/passenger';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail: Passenger;

  @Output() onCheckIn = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  checkInChange(checkIn: boolean) {
    if (checkIn) {
      this.onCheckIn.emit(checkIn);
    }
  }
}
