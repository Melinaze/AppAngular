import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  nombre: string = 'Melina';
  apellido: string = 'Zelaya';
  edad: number = 21;

  //getEdad(): number{
  // return this.edad;
  // }

}
