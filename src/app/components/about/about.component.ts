import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  percentage: number;
  icon: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  aboutData = {
    title: 'ABOUT ME',
    subtitle: 'Let me introduce myself',
    description: 'I am a passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop&q=80',
    stats: [
      { number: '10+', label: 'Years Experience' },
      { number: '200+', label: 'Projects Completed' },
      { number: '50+', label: 'Happy Clients' }
    ]
  };

  skills: Skill[] = [
    { name: 'Angular', percentage: 90, icon: 'fab fa-angular' },
    { name: 'TypeScript', percentage: 85, icon: 'fas fa-code' },
    { name: 'CSS/Tailwind', percentage: 88, icon: 'fab fa-css3-alt' },
    { name: 'Node.js', percentage: 80, icon: 'fab fa-node-js' }
  ];
}
