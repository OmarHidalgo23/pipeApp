import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Omar';
  genero: string = 'masculino';
  inviteMap = { 'masculino': 'invitarlo', 'femenino': 'invitarla', 'other': 'invitarlos' };
  //i18Plural
  clientes: string[] = ['Yajaira', 'Omar', 'franchesca', 'Hugo', 'Cristina'];
  numero: number = 0;
  clientesMap = {
    '=0': 'NO TENEMOS ningún cliente esperando',
    '=1': 'Tenemos 1 cliente esperando',
    'other': 'Tenemos # clientes esperando',
  }

  borrarCliente() {
    if (this.clientes.length > 0) {
      this.clientes.shift();
    }
  }

  cambiarNombre() {
    if (this.nombre == 'Omar') {
      this.nombre = 'Yajaira';
      this.genero = 'femenino';
    } else {
      this.nombre = 'Omar';
      this.genero = 'masculino';
    }
  }
  //KeyValue Pip
  persona = {
    nombre: 'Omar',
    edad: 30,
    direccion: 'Comas, Limas - Perú'
  }
  //Async Pipe
  miObservable = interval(1000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500)
  });
}
