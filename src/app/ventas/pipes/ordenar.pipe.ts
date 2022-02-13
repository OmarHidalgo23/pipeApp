import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor: string = ''): Heroe[] {

    switch (ordenarPor) {
      case "nombre":
        heroes = heroes.sort((a, b) => (a.nombre > b.nombre ? 1 : -1));
        break;
      case "vuela":
        heroes = heroes.sort((a) => ((a.vuela) ? -1 : 1));
        break;
      case "color":
        heroes = heroes.sort((a, b) => (a.color > b.color ? 1 : -1));
        break;
      default: heroes;
        break;
    }
    return heroes;
  }
}
