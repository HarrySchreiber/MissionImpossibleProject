import { Component, OnInit } from '@angular/core';
import offsetPolygon from 'offset-polygon';
import { LocationService } from 'src/app/services/location.service';
import {v4 as uuidv4} from 'uuid';


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
    [40.0320486,-75.6167185],
    [40.0318329,-75.6166542],
    [40.031874 ,-75.6163538],
    [40.0320712,-75.6164423]
  ]

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.polygon = this.inflatePolygon(this.polygon, 0.0004)
    console.log(this.polygon);

    
    
    
    
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

      this.locationService.sendLocation({
        "locationID": uuidv4(),
        "dateTime": (new Date()).toISOString(),
        "inBounds": this.inLocation,
        "latitude": this.currentLocation[0],
        "longitude": this.currentLocation[1]
      }).subscribe({
        next: (v) => { console.log(v); },
        error: (e) => { console.error(e); }
      });
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

    return offsetPolygon(convertedPolygon, offsetValue, 0).map((points) => {
      return [points.x, points.y]
    })
  }

  convertPolygon(originalPolygon: [number, number][]): { "x": number, "y": number }[] {
    return originalPolygon.map((point) => {
      return {"x": point[0], "y": point[1]}
    })
  }
}
