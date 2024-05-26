import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DogImagesComponent } from './dog-images/dog-images.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DogImagesComponent, CatFactsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-w5';
}
