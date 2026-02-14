import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedCategory: string = 'All';

  categories: string[] = ['All', 'Web App', 'Mobile', 'UI/UX', 'API'];

  projects: Project[] = [
    {
      id: 3,
      title: 'Hire Link',
      category: 'Mobile',
      description: 'Una aplicación móvil que conecta a empleadores con candidatos.',
      image: '/projects/mobile.webp',
      technologies: ['Kotlin', 'Firebase', 'Google Maps API', 'Material-UI'],
      links: {
        github: 'https://github.com/Jhoan2-cpu/hirelink-2025_project'
      },
      featured: false
    },
    {
      id: 4,
      title: 'TrinUp',
      category: 'Web App',
      description: 'Plataforma de marketing digital que conecta marcas con su público objetivo ideal.',
      image: '/projects/web_trinup.webp',
      technologies: ['Astro', 'Tailwind', 'TypeScript'],
      links: {
        github: 'https://github.com/Jhoan2-cpu/trinup-frontend',
        live: 'https://trinup-frontend.vercel.app/'
      },
      featured: false
    },
    {
      id: 5,
      title: 'Inventory System',
      category: 'Web App',
      description: 'Sistema de inventario para gestionar productos y pedidos.',
      image: '/projects/web_inventory.webp',
      technologies: ['Cloud', 'Docker', 'NestJS', 'PostgreSQL', 'TypeScript', 'Angular'],
      links: {
        github: 'https://github.com/Jhoan2-cpu/frontend-insaaty',
        live: 'https://inventory.jhoan-cruz.com/'
      },
      featured: false
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedCategory === 'All') {
      return this.projects;
    }
    return this.projects.filter(project => project.category === this.selectedCategory);
  }

  get featuredProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }
}
