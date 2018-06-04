import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isOpened: boolean = false;

  openMenu(){
    if(!this.isOpened){
     this.isOpened = true;
    }else {
      this.isOpened = false;
    }
  }
}
