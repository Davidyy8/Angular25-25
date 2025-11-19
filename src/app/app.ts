import { Component, signal } from '@angular/core';

import { ContadorModule } from './contador/contador.spec';
import { HeroesModule } from './heroes/components/heroes.module';

@Component({
  selector: 'app-root',
  imports: [HeroesModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('02-bases-angular');
}
