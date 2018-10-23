import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PrimerStateService {

  backwardNavDisabled: boolean = false;
  forwardNavDisabled: boolean = true;
  hintText: string = '';

  steps = {
    number: 1
  }

  get BackwardNavDisabled(): boolean { return this.backwardNavDisabled; }
  get ForwardNavDisabled(): boolean { return this.forwardNavDisabled; }

  get HintText(): string { return this.hintText; }
  set HintText(text: string) { this.hintText = text; }

  constructor(private location: Location, private router: Router, private activatedRoute: ActivatedRoute) { }

  enableForwardNav() {
    this.forwardNavDisabled = false;
  }

  disableForwardNav() {
    this.forwardNavDisabled = true;
  }

  enableBackwardNav() {
    this.backwardNavDisabled = false;
  }

  disableBackwardNav() {
    this.backwardNavDisabled = true;
  }

  navForward() {
    this.router.navigate([ '/getting-started/summary' ]);
  }

  navBackward() {
    this.location.back();
  }

}
