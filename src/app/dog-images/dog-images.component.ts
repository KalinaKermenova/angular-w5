import { Component, OnInit } from '@angular/core';
import { DogImagesService } from '../dog-images.service';

@Component({
  selector: 'app-dog-images',
  standalone: true,
  imports: [],
  templateUrl: './dog-images.component.html',
  styleUrl: './dog-images.component.css'
})
export class DogImagesComponent implements OnInit {
  imageUrl: string = '';

  constructor(private dogImagesService: DogImagesService) { }

  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.dogImagesService.getImage().subscribe(
      (data: any) => {
        this.imageUrl = data.message;
      },
      (error: any) => {
        console.error('Error fetching dog image:', error);
      }
    );
  }
}
