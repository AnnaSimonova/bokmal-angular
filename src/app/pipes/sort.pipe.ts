import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(articles, parameter) {
    return articles.sort(function(a,b) {
      return b[parameter] - a[parameter];
    });
  }
}
