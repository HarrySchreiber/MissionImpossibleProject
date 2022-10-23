import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockComponent } from './clock.component';
import { ClockDisplayModule } from 'src/app/pipes/clock-display/clock-display.module';
import { ClockDisplayPipe } from 'src/app/pipes/clock-display/clock-display.pipe';



@NgModule({
  declarations: [
    ClockComponent
  ],
  imports: [
    CommonModule,
    ClockDisplayModule
  ],
  exports: [
    ClockComponent
  ],
  providers: [
    ClockDisplayPipe
  ]
})
export class ClockModule { }
