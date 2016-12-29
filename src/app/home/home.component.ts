import { Component, OnInit } from '@angular/core';
import {PostServiceService} from '../post-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[PostServiceService]
})
export class HomeComponent implements OnInit {
  content = ""
  router;
  constructor(private _router: Router, private PostServiceService: PostServiceService) {
    this.router = _router;
  }
  ngOnInit() {
    this.updateContent();
  }

  updateContent = function(){
    this.PostServiceService.getPosts().subscribe(
      posts => {
      this.content = posts;
    },
      (err) => {
        this.content=`
        <div class="alert alert-danger" role="alert">
          <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span class="sr-only">Error:</span>
          Page not found.
        </div>
        `
    });
  }

}
