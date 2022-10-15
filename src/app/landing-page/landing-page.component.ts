import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  locationArray: string[] = Array<string>()
  inLocation: boolean = false
  currentLocation: [number,number] = [0,0]

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

      // this.locationArray.push(`Lat: ${lat}, Lon: ${lon}`)
      this.currentLocation = [lat,lon]
      this.inLocation = this.inside(this.currentLocation, [[-75.616684,40.032011],
        [-75.616383,40.032048],
        [-75.616356,40.031887],
        [-75.616662,40.031846]])
    })
  }

  inside(point: [number, number], vs: [number, number][]): boolean {
    // ray-casting algorithm based on
    // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
  }
}
