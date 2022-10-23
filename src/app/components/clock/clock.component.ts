import { Component, OnInit } from '@angular/core';
import { ClockDisplayPipe } from 'src/app/pipes/clock-display/clock-display.pipe';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor(private clockDisplay: ClockDisplayPipe) { }

  ngOnInit(): void {
  }

}
