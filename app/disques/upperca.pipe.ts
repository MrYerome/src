import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upperca'
})
export class UppercaPipe implements PipeTransform {

  transform(title: string): string {
  return title
      .toLowerCase()
      .split(" ")
      .map((val) => val.charAt(0).toUpperCase() + val.substring(1))
      .join(" ");
  }
}
