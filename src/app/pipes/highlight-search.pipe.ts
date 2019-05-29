import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightSearch'
})
export class HighlightSearchPipe implements PipeTransform {

  transform(value: string, args?: string): string {
    if (!args) {
      return value;
    }
    let reg: RegExp = new RegExp(args, 'gi');
    return value.replace(reg, "<mark>" + args + "</mark>");
  }
}
