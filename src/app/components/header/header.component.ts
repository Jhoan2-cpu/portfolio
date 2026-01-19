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
}
