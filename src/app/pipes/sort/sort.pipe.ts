import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from '../../users.config';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: IUser[], direction: string = 'asc', column: string = 'username'): IUser[] {
    if(direction === 'asc')
      return value.sort((x, y) => x[column].localeCompare(y[column]));
    else if(direction === 'desc')
      return value.sort((x, y) => y[column].localeCompare(x[column]));
    return value;
  }
}