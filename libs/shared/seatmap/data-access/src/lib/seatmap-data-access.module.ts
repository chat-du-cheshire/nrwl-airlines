import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromSeatmap from './+state/seatmap.reducer';
import { EffectsModule } from '@ngrx/effects';
import { SeatmapEffects } from './+state/seatmap.effects';



@NgModule({
  declarations: [],
  imports: [
  StoreModule.forFeature(fromSeatmap.seatmapFeatureKey, fromSeatmap.reducer),
  EffectsModule.forFeature([SeatmapEffects])]
})
export class SeatmapDataAccessModule { }
