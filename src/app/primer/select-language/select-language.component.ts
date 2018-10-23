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

  languages: Language[] = [];
  selectedLanguage = new FormControl();

  constructor(private primerStateService: PrimerStateService) { }

  ngOnInit() {
    this.primerStateService.HintText = 'Select a language to learn';
    
    this.languages = [
      { Id: 1, Name: 'Spanish', Icon: 'spain', Available: true },
      { Id: 2, Name: 'German', Icon: 'germany', Available: true },
      { Id: 3, Name: 'Italian', Icon: 'italy', Available: true }
    ];
  }

  languageSelected() {
    this.primerStateService.enableForwardNav();
  }

}
