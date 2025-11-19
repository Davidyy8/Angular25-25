import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.html',
  styleUrl: './heroe.css',
  standalone: false,
})
export class HeroeComponent {


  public nombre: string = "Batman";
  public edad: number = 35;

  public get nombrreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

    public getDescripcion(): string {
      return `${this.nombre} - ${this.edad}`
    }

}
