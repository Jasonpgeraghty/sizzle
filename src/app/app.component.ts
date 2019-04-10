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
  title = 'sizzle';
}
