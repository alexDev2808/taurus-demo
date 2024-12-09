import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  items:any;

  constructor( private imageService: ImagesService ) {}

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.imageService.getAll().subscribe({
      next: (response) => this.items = response,
      error: (error) => console.error(error)
    })
  }
  
}
