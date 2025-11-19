import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe';
import { ListaComponente } from "./lista/lista";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    HeroeComponent,
    ListaComponente
  ],
  exports: [
    HeroeComponent,
    ListaComponente
  ],
  imports: [CommonModule]
})

export class HeroesModule {

}
