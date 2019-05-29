import { Pipe, PipeTransform } from '@angular/core';
import {Article} from "../article/article";

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pipeData: Article[], pipeModifier: string): Article[] {
    return pipeData.filter(item =>
        item['name'].toLowerCase().includes(pipeModifier.toLowerCase()));
  }
}
