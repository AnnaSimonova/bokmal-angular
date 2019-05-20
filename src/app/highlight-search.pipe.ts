import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {return value;}
    var re = new RegExp(args, 'gi');
    let result = value.replace(re, "<mark>" + args + "</mark>");
    console.log(result);
    return result;
  }

}
