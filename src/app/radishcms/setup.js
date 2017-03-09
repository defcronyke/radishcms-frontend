import {Component} from '@angular/core';
import {Http} from '@angular/http';
import {ApiService} from './api';

@Component({
  selector: 'radishcms-setup',
  template: require('./setup.html')
})
export class RadishCMSSetupComponent {
  constructor(http: Http, api: ApiService) {
    console.log('RadishCMS setup component loaded');
    this.http = http;
    this.visible = false;
    // this.showMe();
    this.api = api;
    this.api.SettingUp();
  }

  // showMe() {
  //   this.http.get('http://localhost:8080/setting-up')  // TODO: load web address from config file
  //   .map(res => res.json())
  //   .subscribe(visible => {
  //     this.visible = visible;
  //   });
  // }
}
