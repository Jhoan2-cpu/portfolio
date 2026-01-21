import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navItems = [
    { label: 'INICIO', href: '#home', active: false },
    { label: 'EDUCACIÓN', href: '#education', active: false },
    { label: 'HABILIDADES BLANDAS', href: '#soft-skills', active: false },
    { label: 'PROYECTOS', href: '#projects', active: false },
    // { label: 'VIDEO', href: '#video', active: false }
  ];

  socialLinks = [
    // { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/Jhoan2-cpu' },
    // { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/jhoan-antoni-cruz-castillo-3357251b4/' }
    // { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' }
  ];

  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.scrollY + 150; // Offset para activar antes

    this.navItems.forEach(item => {
      const section = document.querySelector(item.href);
      if (section) {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          this.setActiveItem(item.href);
        }
      }
    });
  }

  private setActiveItem(href: string): void {
    this.navItems.forEach(item => {
      item.active = item.href === href;
    });
  }

  downloadCV(): void {
    // Aquí puedes poner la ruta real de tu CV
    const cvUrl = '/assets/cv/Jhoan_Cruz_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Jhoan_Cruz_CV.pdf';
    link.click();
  }
}
