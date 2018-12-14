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

  @Output() onUpdate = new EventEmitter<Passenger>();

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

  update(value: Passenger, isValid: boolean) {
    if (isValid) {
      this.onUpdate.emit(value);
    }
  }

  checkInChange(value) {
    if (value) {
      this.detail.checkInDate = Date.now();
    }
  }
}
