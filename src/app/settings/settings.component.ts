import { Component, OnInit, Renderer2 } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2
  ) {
  }

  dark = false;

  ngOnInit() {
  }

  onChange(value) {
    this.translate.use(value);
  }

  enableDarkMode() {
    if (!this.dark) {
      document.documentElement.style
      .setProperty('--text-color', '#fff');
      this.renderer.addClass(document.body, 'body-class');
      this.dark = true;
    } else {
      document.documentElement.style
      .setProperty('--text-color', '#292f33');
      this.renderer.removeClass(document.body, 'body-class');
      this.dark = false;
    }
  }
}
