import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'omar';
  nombreUpper: string = 'OMAR';
  nombreCompleto: string = 'OmAr HiDaLgO';
  fecha: Date = new Date(); 


}
