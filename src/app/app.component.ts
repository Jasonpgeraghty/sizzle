import { Component, Renderer2 } from '@angular/core';
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
import { NgxSpinnerService } from 'ngx-spinner';
import { Location } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
  /* Code used from https://medium.com/google-developer-experts/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-3eb341ede6c8 */
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
/* End of referenced code */
export class AppComponent {
  title = 'Sizzle';

  constructor(
    private router: Router,
    private navigateBack: NavigateBackService,
    private spinner: NgxSpinnerService,
    private location: Location,
    public translate: TranslateService,
    private storage: StorageService,
    private renderer: Renderer2
    ) {
      this.spinner.show();
      setTimeout(() => {
          this.spinner.hide();
      }, 3000);
      translate.addLangs(['en']);
      translate.setDefaultLang('en');
      const darkModeEnabled = this.storage.getDarkmode();
      if ( darkModeEnabled === '1') {
        document.documentElement.style
        .setProperty('--text-color', '#fff');
        this.renderer.addClass(document.body, 'body-class');
      }
    }

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
      this.location.back();
    }
}
