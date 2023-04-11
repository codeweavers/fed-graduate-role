import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeHyphens'
})
export class removeHyphensPipe implements PipeTransform {

  transform(location: string): string {
    return location.replaceAll("-", " ");
  }

}
