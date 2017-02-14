import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RedditService} from "../../providers/reddit-service";
import {RedditsPage} from "../reddits/reddits";


/*
 Generated class for the Settings page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {


  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }


  getDefaults() {

    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
    }

    else {
      this.category = 'sports';

    }
    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    }

    else {
      this.limit = 10;

    }


  }

  setDefaults() {
    localStorage.setItem('category', this.category);
    localStorage.setItem('limit', this.limit);
    this.navCtrl.push(RedditsPage);
  }


}
