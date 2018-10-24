import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Language } from 'src/app/models/language';
import { PrimerStateService } from '../primer-state.service';

@Component({
  selector: 'lwl-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  stepTitle: string = 'STEP 1';
  stepText: string = 'Select a language to learn';

  languages: Language[] = [
    { Id: 1, Name: 'Spanish', Icon: 'spain', Available: true },
    { Id: 2, Name: 'German', Icon: 'germany', Available: true },
    { Id: 3, Name: 'Italian', Icon: 'italy', Available: true }
  ];

  selectedLanguage = new FormControl();

  constructor(private primerStateService: PrimerStateService) { }

  ngOnInit() {
  }

  languageSelected() {
    this.primerStateService.enableForwardNav();
  }

  navigateForward() {
    this.primerStateService.navForward();
  }

}
