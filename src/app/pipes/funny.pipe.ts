import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'funny'
})
export class FunnyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
