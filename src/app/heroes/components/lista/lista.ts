import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.html',
  styleUrl: './lista.css',
  standalone: false,
})
export class ListaComponente {

  public nombresHeroes: string[] = ["Goku", "Picolo", "Vegeta", "Gohan"]

}
