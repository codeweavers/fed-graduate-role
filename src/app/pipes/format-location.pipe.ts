import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatLocation'
})
export class FormatLocationPipe implements PipeTransform {

  transform(location: string): string {
    return location.replaceAll("-", " ");
  }

}
