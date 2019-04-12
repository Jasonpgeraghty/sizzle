import { Component } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { NavigateBackService } from './services/navigate-back.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  /* Code modifed from https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8 */
    trigger('myAnimation', [
      transition('* <=> *', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
          , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)'}))
            ], { optional: true }),
        ])
      ])
    ])
  ] // register the animations
})
/* End of referenced code that has been modified */
export class AppComponent {
  title = 'Sizzle';

  constructor(
    private router: Router,
    private componentTitle: Title,
    private activatedRoute: ActivatedRoute,
    private navigateBack: NavigateBackService
    ) {}

    ngOnInit() {
      this.router.events
    .subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/') {
          this.title = this.navigateBack.removeSlashes(event.url);
        } else {
          this.title = 'Sizzle';
        }
      }
    });
    }

    navigateToLastRoute() {
      const route = this.navigateBack.getPreviousRoute();
      this.router.navigate([route]);
    }
}
