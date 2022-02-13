import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  activar: boolean = false;
  textoBoton = 'Activar mayúsculas';
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ]

  //ordenamiento
  tipoOrdenamiento = "";

  Cambiar() {
    if (this.activar) {
      this.activar = false;
      this.textoBoton = 'Activar mayúsculas';
    } else {
      this.activar = true;
      this.textoBoton = 'Activar minúsculas';
    }
  }

  CambiarOrdenamiento(value: string) {
    if (this.tipoOrdenamiento == value) {
      this.tipoOrdenamiento = "";
    } else {
      this.tipoOrdenamiento = value;
    }
  }


}
