import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {routing, RootComponent} from './routes';

import {TechsModule} from './techs';

import {MainComponent} from './main';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';
import {RadishCMSSetupComponent} from './radishcms/setup';
import {RadishCMSMainComponent} from './radishcms/main';
// import {Api} from './radishcms/api';

@NgModule({
  imports: [
    BrowserModule,
    routing,
    TechsModule
    // Api
  ],
  declarations: [
    RootComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    RadishCMSSetupComponent,
    RadishCMSMainComponent
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
