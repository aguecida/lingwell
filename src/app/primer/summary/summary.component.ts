import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'lwl-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  stepText: string = 'Done';

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(`Lingwell - ${this.stepText}`);
  }

}
