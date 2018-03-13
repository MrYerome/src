import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disqueCategory'
})
export class DisqueCategoryPipe implements PipeTransform {

  transform(cat: string): string {
    let color: string;
    switch (cat) {
      case 'Français':
        color = "blue lighten-1";
        break;
      case 'Disco':
        color = "green lighten-1";
        break;
      case 'Etranger':
        color = "brown lighten-1";
        break;
      case 'Funk':
        color = "blue lighten-3";
        break;
      case 'Soul':
        color = "deep-purple accent-1";
        break;
      case 'Autre':
        color = "pink lighten-4";
        break;
      case 'Jazz':
        color = "deep-purple darken-2";
        break;
      case 'Variétés':
        color = "lime accent-1";
        break;
    }
    return 'chip '+color;
  }

}
