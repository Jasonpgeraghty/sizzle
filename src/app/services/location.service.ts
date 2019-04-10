import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

getLocation() {
  // Event listener
  return navigator
  .geolocation
  .getCurrentPosition(this.getPositionSuccess,
    this.getPositionError,
    {enableHighAccuracy: true});
}

// Location callbacks

getPositionSuccess(position) {
    console.log(position);
}

getPositionError(err) {
    console.log(`Something went wrong: ${err.messages}`);
}

}
