import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dashes'
})
export class DashesPipe implements PipeTransform {
  newValue: string[] = [];

  transform(value: string, repeat: number = 4, symbol: string = '-'): string {
    for(let i = 0; i < value.length; i+=repeat) {
      this.newValue.push(value.slice(i, i + repeat));
    }
    return this.newValue.join(symbol)
  }
}