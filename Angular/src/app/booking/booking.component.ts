import { Component, OnInit } from '@angular/core';
import { Booking } from '../model/booking.model';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking:Booking = new Booking();

  constructor() { }

  ngOnInit() {
  }

  submit() {

  }

}
