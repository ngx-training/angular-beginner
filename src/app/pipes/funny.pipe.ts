import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funny'
})
export class FunnyPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      const strArr = [...value];
      strArr.forEach((letter, index) => {
        if (index % 2 === 0) {
          strArr[index] = letter.toUpperCase();
        } else {
          strArr[index] = letter;
        }
      });
      value = strArr.join('');
    }
    return value;
  }

}
