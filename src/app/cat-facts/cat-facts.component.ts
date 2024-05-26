import { Component, OnInit } from '@angular/core';
import { CatFactsService } from '../cat-facts.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cat-facts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-facts.component.html',
  styleUrl: './cat-facts.component.css',
})
export class CatFactsComponent implements OnInit {
  fact: string = '';

  constructor(private catFactsService: CatFactsService) {}

  ngOnInit(): void {
    this.fetchFact();
  }

  fetchFact(): void {
    this.catFactsService.getFacts().subscribe(
      (data: any) => {
        this.fact = data.fact;
      },
      (error: any) => {
        console.error('Error fetching cat fact:', error);
      }
    );
  }
}
