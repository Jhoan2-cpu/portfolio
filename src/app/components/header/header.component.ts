import { Component } from '@angular/core';
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
    { label: 'HOME', href: '#home', active: false },
    { label: 'ABOUT', href: '#about', active: false },
    { label: 'SERVICE', href: '#service', active: false },
    { label: 'PORTFOLIO', href: '#portfolio', active: true },
    { label: 'PAGES', href: '#pages', active: false }
  ];

  socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/yourusername' }
  ];

  downloadCV(): void {
    // Aquí puedes poner la ruta real de tu CV
    const cvUrl = '/assets/cv/Jhoan_Cruz_CV.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Jhoan_Cruz_CV.pdf';
    link.click();
  }
}
