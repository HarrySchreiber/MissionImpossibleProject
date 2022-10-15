import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  locationArray: string[] = Array<string>()

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.setData()
    },1000)
  }

  setData(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      this.locationArray.push(`Lat: ${lat}, Lon: ${lon}`)
    })
  }

}
