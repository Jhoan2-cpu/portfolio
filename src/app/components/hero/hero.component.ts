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
      src: '/perfil/perfil.jpg',
      alt: 'Jhoan Antoni Cruz Castillo'
    }
  };

  contactInfo = {
    email: 'jhoan320cruz@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Lima, Perú',
    socialLinks: [
      { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Jhoan2-cpu' },
      { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/jhoan-antoni-cruz-castillo-3357251b4/' }
    ]
  };

  technologies = [
    { name: 'PHP', icon: 'fab fa-php' },
    { name: 'Laravel', icon: 'fab fa-laravel' },
    { name: 'React', icon: 'fab fa-react' },
    { name: 'Node.js', icon: 'fab fa-node-js' },
    { name: 'TypeScript', icon: 'fas fa-code' },
    { name: 'SQL Server', icon: 'fas fa-database' }
  ];

  emailCopied = false;

  copyEmail(): void {
    navigator.clipboard.writeText(this.contactInfo.email).then(() => {
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
