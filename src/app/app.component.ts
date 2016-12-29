import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  content = 'app works!';
  constructor(){
  }
  loadContent = function(str){
    this.content = str;
  }
}
