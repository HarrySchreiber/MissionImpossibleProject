import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  sendLocation(body: any) {
    const url = "https://l0gm5ue31h.execute-api.us-east-1.amazonaws.com/prod/location"
    return this.httpClient.post(url, body)
  }
}
