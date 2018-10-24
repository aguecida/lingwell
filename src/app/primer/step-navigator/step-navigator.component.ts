import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'lwl-step-navigator',
  templateUrl: './step-navigator.component.html',
  styleUrls: ['./step-navigator.component.scss']
})
export class StepNavigatorComponent implements OnInit {

  @Input() stepTitle: string;
  @Input() stepText: string;
  @Input() backText: string = 'BACK';
  @Input() forwardText: string = 'NEXT';
  @Input() disableBackwardNav: boolean = false;
  @Input() disableForwardNav: boolean = false;
  @Input() useDefaultBackBehaviour: boolean = true;
  @Input() position: string = 'bottom';

  @Output() navigateBackward: EventEmitter<any> = new EventEmitter();
  @Output() navigateForward: EventEmitter<any> = new EventEmitter();

  constructor(private location: Location) { }

  ngOnInit() {
  }

  navBackward() {
    if (this.disableBackwardNav) return;

    if (this.useDefaultBackBehaviour) {
      this.location.back();
    }
    else {
      this.navigateBackward.emit();
    }
  }

  navForward() {
    if (this.disableForwardNav) return;

    this.navigateForward.emit();
  }

}
