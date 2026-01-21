import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css'
})
export class PreloaderComponent implements OnInit, OnDestroy {
  isLoading = true;
  isVisible = true;
  private timeouts: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    console.log('Preloader iniciado');
    
    // Iniciar fade out después de 1.5 segundos
    const timeout1 = setTimeout(() => {
      console.log('Iniciando fade out');
      this.isLoading = false;
      this.cdr.detectChanges(); // Forzar detección de cambios
      
      // Remover del DOM después de la transición completa (1000ms)
      const timeout2 = setTimeout(() => {
        console.log('Removiendo preloader del DOM');
        this.isVisible = false;
        this.cdr.detectChanges(); // Forzar detección de cambios
      }, 1000);
      
      this.timeouts.push(timeout2);
    }, 1500);
    
    this.timeouts.push(timeout1);
  }

  ngOnDestroy(): void {
    // Limpiar timeouts
    this.timeouts.forEach(timeout => clearTimeout(timeout));
  }
}
