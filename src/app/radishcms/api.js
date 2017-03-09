import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiService {
  constructor(http: Http) {
    this.setup = false;
    this.main = true;
    this.http = http;
  }
  SettingUp() {
    this.http.get('http://localhost:8080/setting-up')  // TODO: load web address from config file
    .map(res => res.json())
    .subscribe(visible => {
      this.setup = visible;
      this.main = !visible;
    });
  }
}
