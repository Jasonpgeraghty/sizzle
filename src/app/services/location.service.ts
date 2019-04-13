import { Injectable } from '@angular/core';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
  ) { }

getLocation() {
  return new Promise((resolve, reject) => {
  navigator
  .geolocation
  .getCurrentPosition(
    position => {
      resolve({
        long: position.coords.longitude, lat: position.coords.latitude
      });
    },
    error => {
      console.log(`Something went wrong: ${error}`);
    },
    {enableHighAccuracy: true}
    );
  });
}
}
