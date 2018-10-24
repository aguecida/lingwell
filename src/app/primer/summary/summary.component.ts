import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lwl-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  stepText: string = 'Done';

  constructor() { }

  ngOnInit() {
  }

}
