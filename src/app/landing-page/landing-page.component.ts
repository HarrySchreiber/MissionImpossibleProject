import { Component, OnInit } from '@angular/core';
import offsetPolygon from 'offset-polygon';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  locationArray: string[] = Array<string>()
  inLocation: boolean = false
  currentLocation: [number,number] = [0,0]
  polygon: [number, number][] = [
    [
      
      40.0318453,-75.6183842
    ],
    [
      40.0316625,-75.6188133
      
    ],
    [
      40.0312969,-75.6185371
      
    ],
    [
      40.0314674,-75.6180811
    ]
  ]

  constructor() { }

  ngOnInit(): void {

    this.polygon = this.inflatePolygon(this.polygon, 0.00004)

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
      this.inLocation = this.inside(this.currentLocation, this.polygon)
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

  inflatePolygon(originalPolygon: [number, number][], offsetValue: number): [number, number][] {
    let convertedPolygon = this.convertPolygon(originalPolygon)

    console.log(offsetPolygon(convertedPolygon, offsetValue, 0))

    return []
  }

  convertPolygon(originalPolygon: [number, number][]): { "x": number, "y": number }[] {
    return originalPolygon.map((point) => {
      return {"x": point[0], "y": point[1]}
    })
  }
}
