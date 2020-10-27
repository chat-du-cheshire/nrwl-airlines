import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CheckInFeatureShellModule} from '@nrwl-airlines/check-in/feature-shell';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CheckInFeatureShellModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
