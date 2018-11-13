import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DescriptorService {

  constructor() { }

  getInterests(): Category[] {
    return [
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
  }

  getOccupations(): Category[] {
    return [
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

}
