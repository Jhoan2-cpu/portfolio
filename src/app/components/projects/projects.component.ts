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
      image: '/projects/mobile.png',
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
      image: '/projects/web_trinup.png',
      technologies: ['Astro', 'Tailwind', 'TypeScript'],
      links: {
        github: 'https://github.com/Jhoan2-cpu/trinup-frontend',
        live: 'https://trinup-frontend.vercel.app/'
      },
      featured: false
    },
    // {
    //   id: 5,
    //   title: 'Weather Forecast API',
    //   category: 'API',
    //   description: 'RESTful API providing accurate weather data with location-based forecasting and historical weather analytics.',
    //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
    //   technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
    //   links: {
    //     github: 'https://github.com/username/project'
    //   },
    //   featured: true
    // }
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
