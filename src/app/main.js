import {Component} from '@angular/core';
import {ApiService} from './radishcms/api';

@Component({
  selector: 'fountain-app',
  template: require('./main.html'),
  providers: [ApiService]
})
export class MainComponent {}
