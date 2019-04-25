import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  favourites: any;

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
    this.favourites = this.storage.getFavourites();
    console.log(this.favourites);
  }

  goToFavourite(recipe) {
    console.log(recipe);
    if (this.storage.setRecipe(recipe)) {
      this.router.navigate([`recipe/${recipe.label.split(' ').join('-')}`]);
    }
  }

}
