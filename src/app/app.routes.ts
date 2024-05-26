import { Routes } from '@angular/router';
import { DogImagesComponent } from './dog-images/dog-images.component';
import { CatFactsComponent } from './cat-facts/cat-facts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dog-images', pathMatch: 'full' },
    { path: 'dog-images', component: DogImagesComponent },
    { path: 'cat-facts', component: CatFactsComponent },
    { path: '**', component: PageNotFoundComponent },
  ];
  