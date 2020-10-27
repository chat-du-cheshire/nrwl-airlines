import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmButtonComponent } from './confirm-button.component';



@NgModule({
  declarations: [ConfirmButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfirmButtonComponent]
})
export class ConfirmButtonModule { }
