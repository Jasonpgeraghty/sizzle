import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { CountriesService } from '../services/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  constructor(
    private location: LocationService,
    private countries: CountriesService,
    private router: Router
  ) { }

  countryList: any;
  selectedValue: string;

  ngOnInit() {
    this.getCountries();
    this.selectedValue = '0';
    console.log('Selected:' + this.selectedValue);
  }

  getLocation() {
    if ('geolocation' in navigator) {
      this.location.getLocation();
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
