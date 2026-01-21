import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
  stats = [
    { label: 'Total Proyectos', value: '12', icon: 'fas fa-folder' },
    { label: 'Visitas Hoy', value: '234', icon: 'fas fa-eye' },
    { label: 'Mensajes', value: '8', icon: 'fas fa-envelope' },
    { label: 'Tecnologías', value: '15', icon: 'fas fa-code' }
  ];

  recentActivities = [
    { action: 'Nuevo proyecto agregado', time: 'Hace 2 horas', icon: 'fas fa-plus-circle' },
    { action: 'Mensaje recibido de cliente', time: 'Hace 5 horas', icon: 'fas fa-message' },
    { action: 'CV actualizado', time: 'Hace 1 día', icon: 'fas fa-file-pdf' },
    { action: 'Nueva certificación agregada', time: 'Hace 3 días', icon: 'fas fa-certificate' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Verificar si está autenticado
    const isAdmin = localStorage.getItem('isAdmin');
    if (!isAdmin) {
      this.router.navigate(['/admin']);
    }
  }

  logout(): void {
    localStorage.removeItem('isAdmin');
    this.router.navigate(['/admin']);
  }
}
