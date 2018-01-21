import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-3',
  templateUrl: './assignment-3.component.html',
  styles: [`
    .overFive {
      background-color: blue;
      color: white;
    }
    .white-text {
      color: white
    }
  `]
})
export class Assignment3Component implements OnInit {
  paragraphShowing = true;
  clickArray = [];
  constructor() { }

  buttonClick() {
    this.paragraphShowing = !this.paragraphShowing;
    this.clickArray.push(Date.now());
  }

  ngOnInit() {
  }

}
