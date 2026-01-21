import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  loginData = {
    email: '',
    password: ''
  };

  errorMessage = '';
  isLoading = false;

  constructor(private router: Router) {}

  onLogin(): void {
    this.errorMessage = '';
    this.isLoading = true;

    // Simulación de login - en producción conectar con backend
    setTimeout(() => {
      if (this.loginData.email === 'admin@portfolio.com' && this.loginData.password === 'admin123') {
        // Login exitoso
        localStorage.setItem('isAdmin', 'true');
        this.router.navigate(['/admin/dashboard']);
      } else {
        this.errorMessage = 'Credenciales incorrectas. Intenta de nuevo.';
        this.isLoading = false;
      }
    }, 1000);
  }
}
