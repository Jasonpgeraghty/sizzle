import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.sass']
})
export class FavouritesComponent implements OnInit {

  constructor(
    private storage: StorageService,
    private router: Router
  ) { }

  favourites: any;

  ngOnInit() {
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
