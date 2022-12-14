import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { ClockModule } from '../clock/clock.module';
import { ClockDisplayPipe } from 'src/app/pipes/clock-display/clock-display.pipe';
import { ClockComponent } from '../clock/clock.component';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    ClockModule,
  ],
  exports: [
    LandingPageComponent
  ],
  providers: [
    ClockDisplayPipe
  ]
})
export class LandingPageModule { }
