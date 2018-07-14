import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bnkSuffix'
})
export class BnkSuffixPipe implements PipeTransform {

  transform(value: string, lettercase: string): string {
    if (lettercase === 'lower') {
      return value.toLocaleLowerCase() + 'BNK48';
    } else if (lettercase === 'upper') {
      return value.toUpperCase() + 'BNK48';
    }
    return '';
  }

}
