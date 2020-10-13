import { NgModule } from '@angular/core';
import { ShellComponent } from './shell/shell.component';
import {RouterModule, Routes} from '@angular/router';

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
    RouterModule.forRoot(routes)
  ]
})
export class BookingFeatureShellModule { }
