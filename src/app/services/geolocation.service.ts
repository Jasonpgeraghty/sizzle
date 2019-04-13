import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor(
    private http: HttpClient
  ) { }

  API_KEY = 'dJAlGh6EyrzkUo0Fch4VENGfP2yZO01H';

  getLocation(long: string, lat: string) {
    return this.http.get(`http://www.mapquestapi.com/geocoding/v1/reverse?key=${this.API_KEY}&location=${lat},${long}`);
  }
}
