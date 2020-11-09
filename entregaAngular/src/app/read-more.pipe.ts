import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    
    return value.substr(0, 580);

  }

}
