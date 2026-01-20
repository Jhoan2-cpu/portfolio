import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
  icon: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credential?: string;
  icon: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education: Education[] = [
    {
      degree: 'Egresado en Ingeniería de Sistemas e Informática',
      institution: 'Universidad Nacional del Santa',
      period: '2021 - 2026',
      description: 'Especializado en Desarrollo Web y Análisis de Datos',
      achievements: [
        'Alto Rendimiento Académico (Perteneciente al Quinto Superior).',
        'Miembro de Semilleros de Investigación.',
        'Experiencia liderando equipos de desarrollo en proyectos universitarios.'
      ],
      icon: 'fas fa-graduation-cap'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'Angular 17 Overview & Basics',
      issuer: 'LearnWuest',
      date: '2026',
      icon: 'fab fa-angular'
    },
    {
      name: 'Scrum Fundamentals Certified',
      issuer: 'SCRUM Study',
      date: '2024',
      icon: 'fas fa-tasks'
    },
    {
      name: 'SQL Foundations',
      issuer: 'Microsoft',
      date: '2026',
      icon: 'fas fa-database'
    },
    {
      name: 'Data Analysis and Visualization with Python',
      issuer: 'Microsoft',
      date: '2026',
      icon: 'fab fa-python'
    }
  ];
}
