import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funny'
})
export class FunnyPipe implements PipeTransform {

  transform(value: string, ...argv: any[]): string {
    console.log(argv);
    if (value) {
      const strArr = [...value];
      strArr.forEach((letter, index) => {
        if (index % 2 === 0) {
          strArr[index] = letter.toLowerCase();
        } else {
          strArr[index] = letter.toUpperCase();
        }
      });
      value = strArr.join('');
    }
    return value;
  }

}
