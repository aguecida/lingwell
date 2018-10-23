import { Component, OnInit } from '@angular/core';
import { PrimerStateService } from '../primer-state.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lwl-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {

  get BackwardNavDisabled(): boolean { return this.primerStateService.BackwardNavDisabled; }
  get ForwardNavDisabled(): boolean { return this.primerStateService.ForwardNavDisabled; }
  get HintText(): string { return this.primerStateService.HintText; }

  constructor(private primerStateService: PrimerStateService) { }

  ngOnInit() {
    //this.router.navigate(['select-language'], { relativeTo: this.route });
  }

  navForward() {
    this.primerStateService.navForward();
  }

  navBackward() {
    this.primerStateService.navBackward();
  }

}
