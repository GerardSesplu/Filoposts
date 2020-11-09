import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readless'
})
export class ReadlessPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    return value.substr(580, 10000);

  }

}
