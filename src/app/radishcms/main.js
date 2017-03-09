import {Component} from '@angular/core';

@Component({
  selector: 'radishcms-main',
  template: require('./main.html')
})
export class RadishCMSMainComponent {
  constructor() {
    console.log('RadishCMS main component loaded');
    this.visible = true;
  }
}
