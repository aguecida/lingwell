import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDialog } from '@angular/material';

import { Category } from "../models/category";
import { Interest } from '../models/interest';
import { Language } from '../models/language';
import { FeedbackComponent } from '../feedback/feedback.component';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../services/language.service';
import { DescriptorService } from '../services/descriptor.service';

@Component({
  selector: 'lwl-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {

  languages: Language[] = [];
  selectedLanguage = new FormControl();

  currentStep: number = 1;

  categoryFilter = new FormControl();
  categories: Category[] = [];
  selectedInterests: Interest[] = [];

  occupationFilter = new FormControl();
  occupations: Category[] = [];
  selectedOccupations: Interest[] = [];

  constructor(private languageService: LanguageService, private descriptorService: DescriptorService, private titleService: Title, public dialog: MatDialog) { }

  ngOnInit() {
    this.titleService.setTitle('Getting started - Lingwell');

    this.languages = this.languageService.getLanguages();
    this.categories = this.descriptorService.getInterests();
    this.occupations = this.descriptorService.getOccupations();
  }

  interestSelected(interest: Interest): void {
    let index = this.selectedInterests.findIndex(selectedInterest => selectedInterest.Id === interest.Id);

    if (index !== -1) this.selectedInterests.splice(index, 1);
    else this.selectedInterests.push(interest);
  }

  occupationSelected(interest: Interest): void {
    let index = this.selectedOccupations.findIndex(selectedOccupation => selectedOccupation.Id === interest.Id);

    if (index !== -1) this.selectedOccupations.splice(index, 1);
    else this.selectedOccupations.push(interest);
  }

  isSelectedInterest(interest: Interest): boolean {
    return this.selectedInterests.some(selectedInterest => selectedInterest.Id === interest.Id);
  }

  isSelectedOccupation(interest: Interest): boolean {
    return this.selectedOccupations.some(selectedOccupation => selectedOccupation.Id === interest.Id);
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
