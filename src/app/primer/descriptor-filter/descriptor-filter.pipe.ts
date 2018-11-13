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
    let clonedCategories: Category[] = JSON.parse(JSON.stringify(data));

    if (categories && categories.length > 0) {
      clonedCategories = clonedCategories.filter(category => categories.includes(category.Name));
    }

    if (query) {
      clonedCategories = clonedCategories.filter(category => {
        category.Descriptors = category.Descriptors.filter(descriptor => descriptor.Name.toLowerCase().includes(query.toLowerCase()));
        return category.Descriptors.length > 0;
      });
    }

    return clonedCategories;
  }

}
