import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: any[], search: string): any[] {
    if (search.length === 0) return products;
    return products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
  }
}

