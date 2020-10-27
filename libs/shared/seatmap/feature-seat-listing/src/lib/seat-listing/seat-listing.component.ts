import { Component, OnInit } from '@angular/core';
import {DateTime} from 'luxon';
import {formatDate} from '@nrwl-airlines/shared/util-formatting';

@Component({
  selector: 'seatmap-seat-listing',
  templateUrl: './seat-listing.component.html',
  styleUrls: ['./seat-listing.component.css']
})
export class SeatListingComponent implements OnInit {

  get today(): string { // 👈
    const now = DateTime.local();

    return formatDate(now);
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSeatConfirmed(isConfirmed: boolean): void { // 👈
    console.log('Is seat confirmed?', isConfirmed);
  }

}
