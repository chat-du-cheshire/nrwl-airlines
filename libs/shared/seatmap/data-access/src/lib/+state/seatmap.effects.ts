import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

import * as SeatmapActions from './seatmap.actions';


@Injectable()
export class SeatmapEffects {


  loadSeatmaps$ = createEffect(() => this.actions$.pipe(ofType(SeatmapActions.loadSeatmaps))).pipe(concatMap(() => EMPTY));


  constructor(private actions$: Actions) {}

}
