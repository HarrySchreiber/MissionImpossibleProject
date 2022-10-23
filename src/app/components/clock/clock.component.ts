import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeLeftMilli: number = 3600000

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.timeLeftMilli > 1000){
        this.timeLeftMilli = this.timeLeftMilli - 1000
      }
      
    }, 1000)
  }

}
