import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClockDisplayPipe } from './clock-display.pipe';



@NgModule({
  declarations: [
    ClockDisplayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClockDisplayPipe
  ]
})
export class ClockDisplayModule { }
