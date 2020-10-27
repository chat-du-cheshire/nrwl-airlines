import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatListingComponent } from './seat-listing/seat-listing.component';
import {RouterModule, Routes} from '@angular/router';
import {SeatmapDataAccessModule} from '@nrwl-airlines/seatmap/data-access';

const routes: Routes = [ // 👈
  {
    path: '',
    pathMatch: 'full',
    component: SeatListingComponent,
  },
];


@NgModule({
  declarations: [SeatListingComponent],
  imports: [
    RouterModule.forChild(routes),
    SeatmapDataAccessModule,
    CommonModule
  ]
})
export class SeatmapFeatureSeatListingModule { }
