import { Component } from '@angular/core';

@Component({
  selector: 'app-centros',
  imports: [],
  templateUrl: './centros.html',
  styleUrl: './centros.css',
  standalone: true
})



export class CentrosComponent {
  listaCentros: lista[] = [
    {imagen: "", nombre: "", localidad: "", listaCiclos: []},
    {imagen: "", nombre: "", localidad: "", listaCiclos: []},
    {imagen: "", nombre: "", localidad: "", listaCiclos: []},
    {imagen: "", nombre: "", localidad: "", listaCiclos: []}

  ]

  public anterior(): void {

  }

  public eliminar(): void  {

  }

  public insertar(): void {
    
  }

}
interface lista{
  imagen: string;
  nombre: string;
  localidad: string;
  listaCiclos: string[];
}
