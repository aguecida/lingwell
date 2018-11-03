import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lwl-nav-footer',
  templateUrl: './nav-footer.component.html',
  styleUrls: ['./nav-footer.component.scss']
})
export class NavFooterComponent implements OnInit {

  @Input() stepNumber: number;
  @Input() showStepNumber: boolean;
  @Input() stepText: string;

  @Input() stepBackDisabled: boolean = false;
  @Input() stepNextDisabled: boolean = false;

  @Output() stepBack = new EventEmitter<void>();
  @Output() stepNext = new EventEmitter<void>();

  get stepNumberText(): string {
    return `STEP ${this.stepNumber}`;
  }

  constructor() { }

  ngOnInit() {
  }

  navigateBack() {
    this.stepBack.emit();
  }

  navigateNext() {
    this.stepNext.emit();
  }

}
