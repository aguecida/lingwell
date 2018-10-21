import { Component, OnInit } from '@angular/core';
import { faUserCircle, faGamepad, faComments } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'lwl-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss']
})
export class SplashPageComponent implements OnInit {

  faUserCircle = faUserCircle;
  faGamepad = faGamepad;
  faComments = faComments;

  constructor() { }

  ngOnInit() {
  }

}
