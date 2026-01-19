import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: Skill[] = [
    // Frontend
    { name: 'HTML5', icon: 'fab fa-html5', level: 95, category: 'Frontend' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90, category: 'Frontend' },
    { name: 'JavaScript', icon: 'fab fa-js', level: 88, category: 'Frontend' },
    { name: 'TypeScript', icon: 'fas fa-code', level: 85, category: 'Frontend' },
    { name: 'Angular', icon: 'fab fa-angular', level: 90, category: 'Frontend' },
    { name: 'React', icon: 'fab fa-react', level: 82, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', icon: 'fab fa-node-js', level: 85, category: 'Backend' },
    { name: 'Python', icon: 'fab fa-python', level: 80, category: 'Backend' },
    { name: 'Java', icon: 'fab fa-java', level: 75, category: 'Backend' },
    
    // Tools & Others
    { name: 'Git', icon: 'fab fa-git-alt', level: 88, category: 'Tools' },
    { name: 'Docker', icon: 'fab fa-docker', level: 78, category: 'Tools' },
    { name: 'Figma', icon: 'fab fa-figma', level: 82, category: 'Design' }
  ];

  categories = ['Frontend', 'Backend', 'Tools', 'Design'];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}
