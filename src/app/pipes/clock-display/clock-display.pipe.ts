import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clockDisplay'
})
export class ClockDisplayPipe implements PipeTransform {

  transform(milliseconds: number): unknown {
    const seconds = Math.floor((milliseconds / 1000) % 60)
    const minutes = Math.floor((milliseconds / (1000*60)) % 60)
    const hours = Math.floor((milliseconds / (1000*60*60)) % 24)
    
    return `${hours !== 0 ? `${hours}:` : ''}${hours !== 0 || minutes !== 0 ? `${this.clockFormat(minutes)}:` : ''}${hours !== 0 || minutes !== 0 || seconds !== 0 ? `${this.clockFormat(seconds)}` : 'Game Over'}`
  }

  clockFormat(value: number): string {
    return value < 10 ? `0${value}` : `${value}`
  }

}
