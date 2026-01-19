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
      highlight: 'JHOAN ANTONI',
      lines: ['CRUZ CASTILLO']
    },
    quote: 'Hola, soy Jhoan Antoni Cruz Castillo. Soy un Desarrollador Full Stack especializado en construir aplicaciones web escalables y eficientes.',
    image: {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop&q=80',
      alt: 'Professional Portrait'
    }
  };

  technologies = [
    { name: 'Angular', icon: 'fab fa-angular' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'TypeScript', icon: 'fab fa-js' },
    { name: 'Python', icon: 'fab fa-python' },
    { name: 'Docker', icon: 'fab fa-docker' }
  ];

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
