import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class PostServiceService {
  router;
  constructor(private _router: Router, private http: Http) {
    this.router = _router;
    console.log('service initialized');
  }
  getPosts(){
    return this.http.get('/assets/posts'+this.router.url+'.html')
    .map(res => res.text());
  }
}
