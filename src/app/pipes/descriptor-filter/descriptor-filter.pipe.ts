import { Pipe, PipeTransform } from '@angular/core';

import { Category } from '../../models/category';

@Pipe({
  name: 'descriptorFilter'
})
export class DescriptorFilterPipe implements PipeTransform {

  transform(data: Category[], query: string, categories: string[]): Category[] {
    if (!data) return [];
    if (!query && (!categories || categories.length === 0)) return data;

    // Deep copy categories
    let clonedCategories = JSON.parse(JSON.stringify(data));

    if (categories && categories.length > 0) {
      clonedCategories = clonedCategories.filter(category => categories.includes(category.Name));
    }

    if (query) {
      clonedCategories = clonedCategories.filter(category => {
        category.Interests = category.Interests.filter(interest => interest.Name.toLowerCase().includes(query.toLowerCase()));
        return category.Interests.length > 0;
      });
    }

    return clonedCategories;
  }

}
