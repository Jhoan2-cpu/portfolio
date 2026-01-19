import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SoftSkill {
  name: string;
  description: string;
  icon: string;
  level: number;
}

@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css'
})
export class SoftSkillsComponent {
  softSkills: SoftSkill[] = [
    {
      name: 'Comunicación',
      description: 'Habilidad para transmitir ideas de forma clara y efectiva, tanto verbal como escrita.',
      icon: 'fas fa-comments',
      level: 90
    },
    {
      name: 'Trabajo en Equipo',
      description: 'Capacidad para colaborar eficientemente con equipos multidisciplinarios.',
      icon: 'fas fa-users',
      level: 95
    },
    {
      name: 'Resolución de Problemas',
      description: 'Enfoque analítico para identificar y resolver desafíos técnicos complejos.',
      icon: 'fas fa-lightbulb',
      level: 88
    },
    {
      name: 'Adaptabilidad',
      description: 'Flexibilidad para aprender nuevas tecnologías y adaptarse a cambios rápidos.',
      icon: 'fas fa-sync-alt',
      level: 92
    },
    {
      name: 'Gestión del Tiempo',
      description: 'Organización efectiva para cumplir plazos y priorizar tareas importantes.',
      icon: 'fas fa-clock',
      level: 85
    },
    {
      name: 'Liderazgo',
      description: 'Capacidad para guiar equipos, tomar decisiones y motivar a otros.',
      icon: 'fas fa-crown',
      level: 82
    }
  ];
}
