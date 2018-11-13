import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDialog } from '@angular/material';
import { Title } from '@angular/platform-browser';

import { Category } from "../models/category";
import { Descriptor } from '../models/descriptor';
import { Language } from '../models/language';
import { FeedbackComponent } from '../feedback/feedback.component';
import { LanguageService } from '../services/language.service';
import { DescriptorService } from '../services/descriptor.service';

@Component({
  selector: 'lwl-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {

  currentStep: number = 1;
  languages: Language[] = [];
  selectedLanguage = new FormControl();
  interests: Category[] = [];
  selectedInterests: Descriptor[] = [];
  occupations: Category[] = [];
  selectedOccupations: Descriptor[] = [];

  constructor(private languageService: LanguageService, private descriptorService: DescriptorService, private titleService: Title, public dialog: MatDialog) { }

  ngOnInit() {
    this.titleService.setTitle('Getting started - Lingwell');
    this.languages = this.languageService.getLanguages();
    this.interests = this.descriptorService.getInterests();
    this.occupations = this.descriptorService.getOccupations();
  }

  stepNext(): void {
    if (this.currentStep === 4) return;
    this.currentStep += 1;
  }

  stepBack(): void {
    if (this.currentStep === 1) return;
    this.currentStep -= 1;
  }

  stepNextDisabled(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.selectedLanguage.value === null;
      case 2:
        return this.selectedInterests.length === 0;
      case 3:
        return false;
      default:
        return true;
    }
  }

  stepBackDisabled(): boolean {
    return this.currentStep === 1;
  }

  getHintText(): string {
    switch (this.currentStep) {
      case 1:
        return 'Select a language';
      case 2:
        return 'Select interests';
      case 3:
        return 'Select occupation(s)';
      default:
        return 'Done';
    }
  }

  openFeedbackDialog(): void {
    this.dialog.open(FeedbackComponent, {
      width: '300px'
    });
  }

}
