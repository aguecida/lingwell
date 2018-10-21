import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lwl-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  input: string = '';

  constructor() { }

  ngOnInit() {
  }

}
