import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Language } from 'src/app/models/language';
import { PrimerStateService } from '../primer-state.service';
import { MatSelectChange } from '@angular/material';

@Component({
  selector: 'lwl-select-language',
  templateUrl: './select-language.component.html',
  styleUrls: ['./select-language.component.scss']
})
export class SelectLanguageComponent implements OnInit {

  stepTitle: string = 'STEP 1';
  stepText: string = 'Select a language to learn';
  selectedLanguage = new FormControl();

  languages: Language[] = [
    { Id: 1, Name: 'Spanish', Icon: 'spain', Available: true },
    { Id: 2, Name: 'German', Icon: 'germany', Available: true },
    { Id: 3, Name: 'Italian', Icon: 'italy', Available: true }
  ];

  constructor(private primerStateService: PrimerStateService) { }

  ngOnInit() {
    if (this.primerStateService.selectedLanguage) {
      let lastSelectedLanguageId = this.primerStateService.selectedLanguage.Id;
      let lastSelectedLanguage = this.languages.find(language => language.Id === lastSelectedLanguageId);
      this.selectedLanguage.setValue(lastSelectedLanguage);
    }
  }

  languageSelected(event: MatSelectChange) {
    this.primerStateService.selectedLanguage = event.value;
    this.primerStateService.enableForwardNav();
  }

  navigateForward() {
    this.primerStateService.navForward();
  }

}
