import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateBackService {

  private lastRoute: string;
  private currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.lastRoute = this.currentRoute;
        this.currentRoute = event.url;
      }
    });
  }

  getPreviousRoute() {
    return this.lastRoute;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }

  removeSlashes(title: string) {
    const newTitle = title.split('/').pop();
    return newTitle.charAt(0).toUpperCase() + newTitle.slice(1).split('-').join(' ');
  }
}
