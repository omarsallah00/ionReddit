import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RedditService} from "../../providers/reddit-service";
import {DetailsPage} from "../details/details";

/*
 Generated class for the Reddits page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-reddits',
  templateUrl: 'reddits.html'
})
export class RedditsPage {

  items: any;
  category: any;
  limit: any;

  constructor(public navCtrl: NavController, private redditService: RedditService) {
    this.getDefaults();
  }


  ngOnInit() {
    this.getPosts(this.category, this.limit);
    console.log('onInit ran...');
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

  getPosts(category, limit) {
    this.redditService.getPosts(category, limit).subscribe(response => {
      this.items = response.data.children;
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

  changeCategory() {
    this.getPosts(this.category, this.limit);
  }


}
