import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'seatmap-seat-listing',
  templateUrl: './seat-listing.component.html',
  styleUrls: ['./seat-listing.component.css']
})
export class SeatListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSeatConfirmed(isConfirmed: boolean): void { // 👈
    console.log('Is seat confirmed?', isConfirmed);
  }

}
