import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    private storage: StorageService
  ) {
  }

  ngOnInit() {
  }

  onChange(value) {
    this.translate.use(value);
  }

  enableDarkMode() {
    const darkModeEnabled = this.storage.getDarkmode();
    if ( darkModeEnabled === '0') {
      document.documentElement.style
      .setProperty('--text-color', '#fff');
      this.renderer.addClass(document.body, 'body-class');
      this.storage.setDarkmode('1');
    } else {
      document.documentElement.style
      .setProperty('--text-color', '#292f33');
      this.renderer.removeClass(document.body, 'body-class');
      this.storage.setDarkmode('0');
    }
  }
}
