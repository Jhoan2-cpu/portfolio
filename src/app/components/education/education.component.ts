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
    },
    {
      degree: 'Full Stack Web Development',
      institution: 'Tech Academy Bootcamp',
      period: '2022',
      description: 'Intensive program focused on modern web technologies',
      achievements: [
        'Built 15+ full-stack projects',
        'Specialized in MEAN/MERN stack',
        'Mentored junior students'
      ],
      icon: 'fas fa-code'
    }
  ];

  certifications: Certification[] = [
    {
      name: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credential: 'AWS-SA-2023-12345',
      icon: 'fab fa-aws'
    },
    {
      name: 'Google Professional Cloud Developer',
      issuer: 'Google Cloud',
      date: '2023',
      credential: 'GCP-CD-2023-67890',
      icon: 'fab fa-google'
    },
    {
      name: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      date: '2022',
      credential: 'MS-AZ-2022-54321',
      icon: 'fab fa-microsoft'
    },
    {
      name: 'Meta Front-End Developer',
      issuer: 'Meta (Facebook)',
      date: '2022',
      icon: 'fab fa-meta'
    }
  ];
}
