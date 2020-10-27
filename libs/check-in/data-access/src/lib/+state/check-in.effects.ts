import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';

import {concatMap} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

import * as CheckInActions from './check-in.actions';


@Injectable()
export class CheckInEffects {


  loadCheckIns$ = createEffect(() => {
    return this.actions$.pipe(ofType(CheckInActions.loadCheckIns));
  }).pipe(concatMap(() => EMPTY));


  constructor(private actions$: Actions) {
  }

}
