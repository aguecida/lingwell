import { Injectable } from '@angular/core';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor() { }

  getLanguages(): Language[] {
    return [
      { Id: 1, Name: 'Spanish', Icon: 'spain', Available: true },
      { Id: 2, Name: 'German', Icon: 'germany', Available: false },
      { Id: 3, Name: 'Italian', Icon: 'italy', Available: false }
    ];
  }

}
