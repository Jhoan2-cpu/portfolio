import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    // Simular carga de 2 segundos
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
