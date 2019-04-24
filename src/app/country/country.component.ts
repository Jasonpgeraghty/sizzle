import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { CountriesService } from '../services/countries.service';
import { GeolocationService } from '../services/geolocation.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(
    private location: LocationService,
    private countries: CountriesService,
    private geoLocation: GeolocationService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  countryList: any;
  selectedValue: string;
  coords: any;
  country: any;

  ngOnInit() {
    this.getCountries();
    this.selectedValue = '0';
    console.log('Selected:' + this.selectedValue);
  }

  getLocation() {
    if ('geolocation' in navigator) {
      this.spinner.show();
      this.location
        .getLocation()
        .then(
          coords => {
            this.coords = coords;
            const lat = this.coords.lat;
            const long = this.coords.long;
            this.geoLocation.getLocation(long, lat)
            .subscribe(
              result => {
                this.country = result;
                // Provides country code
                this.country = this.country.results[0].locations[0].adminArea1;
                let country: any;
                for (country in this.countryList) {
                  if (this.countryList[country].code === this.country) {
                    this.router.navigate([`category/${this.countryList[country].name}`]);
                    break;
                  }
                }
            });
          }
        );

      // console.log(this.coords);

    } else {
      console.log('geolocation not active');
    }
  }

  getCountries() {
    this.countries
    .getCountries()
    .subscribe(
      countryList => {
        this.countryList = countryList;
        console.log(this.countryList);
      }
    );
  }

  getRecipeForCountry() {
    if (this.selectedValue !== '0') {
      this.router.navigate([`category/${this.selectedValue.split(' ').join('-')}`]);
    } else {
      console.log("can't be initial value");
    }
  }

}
