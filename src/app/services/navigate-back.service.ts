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

  getPreviousUrl() {
    return this.lastRoute;
  }
}