import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import {SharedDataAccessModule} from '@nrwl-airlines/shared/data-access';
import {CheckInDataAccessModule} from '@nrwl-airlines/check-in/data-access';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [],
  },
];

@NgModule({
  declarations: [ShellComponent],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
    SharedDataAccessModule,
    CheckInDataAccessModule
  ],
})
export class CheckInFeatureShellModule {}
