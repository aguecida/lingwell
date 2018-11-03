import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { MatDialog } from '@angular/material';

import { Category } from "../models/category";
import { Interest } from '../models/interest';
import { Language } from '../models/language';
import { FeedbackComponent } from '../feedback/feedback.component';

@Component({
  selector: 'lwl-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.scss']
})
export class PrimerComponent implements OnInit {

  languages: Language[] = [];
  selectedLanguage = new FormControl();

  currentStep: number = 1;
  previousStep: number = 1;

  categoryFilter = new FormControl();
  categories: Category[] = [];
  selectedInterests: Interest[] = [];

  occupationFilter = new FormControl();
  occupations: Category[] = [];
  selectedOccupations: Interest[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.languages = [
      { Id: 1, Name: 'Spanish', Icon: 'spain', Available: true },
      { Id: 2, Name: 'German', Icon: 'germany', Available: false },
      { Id: 3, Name: 'Italian', Icon: 'italy', Available: false }
    ];

    this.categories = [
      {
        Id: 1,
        Name: 'Sports',
        Interests: [
          { Id: 1, Name: 'Rock Climbing' },
          { Id: 2, Name: 'Swimming' },
          { Id: 3, Name: 'Surfing' },
          { Id: 4, Name: 'Basketball' },
          { Id: 5, Name: 'Baseball' },
          { Id: 6, Name: 'Football' },
          { Id: 7, Name: 'Rugby' },
          { Id: 8, Name: 'Cricket' },
          { Id: 9, Name: 'Billiards' },
          { Id: 10, Name: 'Golf' },
          { Id: 11, Name: 'Hockey' },
          { Id: 12, Name: 'Water Polo' },
          { Id: 13, Name: 'Volleyball' },
          { Id: 14, Name: 'Boxing' },
          { Id: 15, Name: 'Archery' },
          { Id: 16, Name: 'Badminton' },
          { Id: 17, Name: 'Tennis' }
        ]
      },
      {
        Id: 2,
        Name: 'Art + Music',
        Interests: [
          { Id: 18, Name: 'Guitar' },
          { Id: 19, Name: 'Painting' },
          { Id: 20, Name: 'Singing' }
        ]
      },
      {
        Id: 3,
        Name: 'Entertainment',
        Interests: [
          { Id: 21, Name: 'Television' },
          { Id: 22, Name: 'Movies' },
          { Id: 23, Name: 'Theatre' },
        ]
      },
      {
        Id: 4,
        Name: 'Technology',
        Interests: [
          { Id: 24, Name: 'Computer Hardware' },
          { Id: 25, Name: 'Coding/Programming' },
          { Id: 26, Name: 'eSports' }
        ]
      },
      {
        Id: 5,
        Name: 'Food + Drink',
        Interests: [
          { Id: 27, Name: 'Cooking' },
          { Id: 28, Name: 'Baking' },
          { Id: 29, Name: 'Wine Tasting' },
          { Id: 30, Name: 'Brewing' },
        ]
      },
      {
        Id: 6,
        Name: 'Nature + Wildlife',
        Interests: [
          { Id: 31, Name: 'Astronomy' },
          { Id: 32, Name: 'Hiking' },
          { Id: 33, Name: 'Traveling' },
          { Id: 34, Name: 'Geology' }
        ]
      }
    ];

    this.occupations = [
      {
        Id: 7,
        Name: 'Technology',
        Interests: [
          { Id: 500, Name: 'Software Developer' },
          { Id: 501, Name: 'Quality Assurance Analyst' }
        ]
      },
      {
        Id: 8,
        Name: 'Education',
        Interests: [
          { Id: 502, Name: 'Student' },
          { Id: 503, Name: 'Teacher' }
        ]
      },
      {
        Id: 9,
        Name: 'Health + Fitness',
        Interests: [
          { Id: 504, Name: 'Doctor' },
          { Id: 505, Name: 'Nurse' },
          { Id: 506, Name: 'Personal Trainer' },
          { Id: 507, Name: 'Pharmacist' },
          { Id: 508, Name: 'Dentist' },
          { Id: 509, Name: 'Dental Hygienist' }
        ]
      }
    ];
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

    this.previousStep = this.currentStep;
    this.currentStep += 1;
  }

  stepBack(): void {
    if (this.currentStep === 1) return;

    this.previousStep = this.currentStep;
    this.currentStep -= 1;
  }

  stepNextDisabled(): boolean {
    if (this.currentStep === 1) {
      return this.selectedLanguage.value === null;
    }
    else if (this.currentStep === 2) {
      return this.selectedInterests.length === 0;
    }
    else if (this.currentStep === 3) {
      return false;
    }
    else {
      return true;
    }
  }

  stepBackDisabled(): boolean {
    return this.currentStep === 1;
  }

  getHintText(): string {
    if (this.currentStep === 1) {
      return 'Select a language';
    }
    else if (this.currentStep === 2) {
      return 'Select interests';
    }
    else if (this.currentStep === 3) {
      return 'Select occupation(s)';
    }
    else {
      return 'Done';
    }
  }

  openFeedbackDialog(): void {
    this.dialog.open(FeedbackComponent, {
      width: '300px'
    });
  }

}
