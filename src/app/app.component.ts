import { Component } from '@angular/core';
import { AnimePageComponent } from './components/anime-page/anime-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AnimePageComponent],
  template: `<app-anime-page />`
})
export class AppComponent {}
