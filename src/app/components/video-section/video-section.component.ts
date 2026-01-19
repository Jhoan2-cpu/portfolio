import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-section.component.html',
  styleUrl: './video-section.component.css'
})
export class VideoSectionComponent {
  videoData = {
    title: {
      main: 'FAILURE IS THE CONDIMENT THAT GIVES',
      highlight: 'SUCCESS'
    },
    description: 'Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.',
    ctaButton: {
      text: 'DOWNLOAD CV',
      icon: 'fas fa-arrow-right'
    },
    video: {
      thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=600&fit=crop&q=80',
      url: '#',
      playIcon: 'fas fa-play'
    }
  };

  onDownloadCV(): void {
    console.log('Download CV clicked');
    // Implementar descarga de CV
  }

  onPlayVideo(): void {
    console.log('Play video clicked');
    // Implementar reproducción de video
  }
}
