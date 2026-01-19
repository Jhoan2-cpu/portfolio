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
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web App',
      description: 'Full-stack e-commerce solution with payment integration, real-time inventory management, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/username/project'
      },
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web App',
      description: 'Collaborative task manager with drag-and-drop interface, team collaboration features, and real-time updates.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
      technologies: ['React', 'Firebase', 'Material-UI', 'TypeScript'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/username/project'
      },
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracking Mobile',
      category: 'Mobile',
      description: 'Cross-platform fitness app with workout tracking, progress analytics, and social sharing features.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80',
      technologies: ['React Native', 'Redux', 'Express', 'PostgreSQL'],
      links: {
        github: 'https://github.com/username/project'
      },
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      category: 'UI/UX',
      description: 'Modern portfolio design with smooth animations, dark mode, and responsive layout for creative professionals.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      technologies: ['Figma', 'HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://example.com'
      },
      featured: false
    },
    {
      id: 5,
      title: 'Weather Forecast API',
      category: 'API',
      description: 'RESTful API providing accurate weather data with location-based forecasting and historical weather analytics.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Docker'],
      links: {
        github: 'https://github.com/username/project'
      },
      featured: false
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      category: 'Web App',
      description: 'Analytics dashboard for social media management with insights, scheduling, and multi-platform integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      technologies: ['Vue.js', 'Python', 'Django', 'Chart.js'],
      links: {
        live: 'https://example.com',
        github: 'https://github.com/username/project'
      },
      featured: true
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
