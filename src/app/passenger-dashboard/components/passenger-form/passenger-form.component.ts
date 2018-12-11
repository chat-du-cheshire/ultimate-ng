import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Passenger} from '../../models/passenger';
import {Baggage} from '../../models/Baggage';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {

  @Input() detail: Passenger;

  @Output() onCheckIn = new EventEmitter<boolean>();

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No luggage'
  }, {
    key: 'hand-only',
    value: 'Hand luggage'
  }, {
    key: 'hold-only',
    value: 'Hold luggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and hold luggage'
  }];

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
