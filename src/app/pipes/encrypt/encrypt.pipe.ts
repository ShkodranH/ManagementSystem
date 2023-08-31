import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encrypt'
})
export class EncryptPipe implements PipeTransform {

  transform(value: string): string {
    let symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let replace = '(@)+#-[$]*%/{&}^!_=.'
    let result = '';
    for(let i = 0; i < value.length; i++) {
      for(let j = 0; j < symbols.length; j++) {
        if(value[i] === symbols[j]) {
          if(i%3 === 1)
            result += symbols[j];
          else
            result += replace[j % replace.length];
          break;
        }
      }
    }
    return result;
  }

}
