import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import {RouterModule, Routes} from '@angular/router';
import {BookingDataAccessModule} from '@nrwl-airlines/booking/data-access';
import {SharedDataAccessModule} from '@nrwl-airlines/shared/data-access';

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
    SharedDataAccessModule,
    BookingDataAccessModule,
    RouterModule.forRoot(routes)
  ]
})
export class BookingFeatureShellModule { }
