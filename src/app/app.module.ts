import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {TabsPage} from '../pages/tabs/tabs';
import {SettingsPage} from "../pages/settings/settings";
import {RedditsPage} from "../pages/reddits/reddits";
import {DetailsPage} from "../pages/details/details";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    SettingsPage,
    RedditsPage,
    DetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SettingsPage,
    RedditsPage,
    TabsPage,
    DetailsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
