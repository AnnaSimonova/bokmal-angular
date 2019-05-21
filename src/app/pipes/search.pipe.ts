import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(pipeData, pipeModifier) {
    return pipeData.filter(function(item) {
      return item['name'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}
