import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../article/article";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(articles: Article[], parameter: string): Article[]  {
    return articles.sort((a, b) => {
      return b[parameter] - a[parameter];
    });
  }
}
