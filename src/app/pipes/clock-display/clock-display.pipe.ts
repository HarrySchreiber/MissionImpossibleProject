import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clockDisplay'
})
export class ClockDisplayPipe implements PipeTransform {

  transform(milliseconds: number): unknown {
    const seconds = Math.floor((milliseconds / 1000) % 60)
    const minutes = Math.floor((milliseconds / (1000*60)) % 60)
    const hours = Math.floor((milliseconds / (1000*60*60)) % 24)
    
    return `${hours}:${this.clockFormat(minutes)}:${this.clockFormat(seconds)}`  //Since the game is in hours typically just leave off the leading digit
  }

  clockFormat(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

}
