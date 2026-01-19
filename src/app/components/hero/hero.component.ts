import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  heroData = {
    title: {
      highlight: 'IMAGINATION',
      lines: ['IS MORE', 'IMPORTANT THAN', 'KNOWLEDGE']
    },
    quote: 'Together we the people achieve more than any single person could ever do alone.',
    ctaButton: {
      text: 'GETTING STARTED',
      icon: 'fas fa-arrow-right'
    },
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80',
      alt: 'Professional Portrait'
    }
  };

  onCtaClick(): void {
    console.log('CTA clicked');
    // Implementar navegación o acción
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
