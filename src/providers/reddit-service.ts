import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the RedditService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class RedditService {
  http: any;
  baseUrl: String;

  constructor(http: Http) {
    this.http=http;
    this.baseUrl="https://www.reddit.com/r";
  }

  getPosts(category , limit){

    return this.http.get(this.baseUrl + '/' + category + '/top.json?limit='+limit).
      map(res=>res.json());
  }

}
