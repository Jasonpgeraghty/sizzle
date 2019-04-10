import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
  ) { }

getLocation() {
  let coords: any;

  coords = navigator
            .geolocation
            .getCurrentPosition(
              this.getPositionSuccess,
              this.getPositionError,
              {enableHighAccuracy: true}
              );
  return coords;
}

// Location callbacks
getPositionSuccess(position) {
    console.log(position);
}

getPositionError(err) {
    console.log(`Something went wrong: ${err.messages}`);
}

}
