import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.sass']
})
export class CountryComponent implements OnInit {

  constructor(
    private location: LocationService
  ) { }

  ngOnInit() {
    this.location.getLocation();
  }

}
