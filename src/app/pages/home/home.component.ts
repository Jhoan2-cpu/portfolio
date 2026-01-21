import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { EducationComponent } from '../../components/education/education.component';
import { SoftSkillsComponent } from '../../components/soft-skills/soft-skills.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { VideoSectionComponent } from '../../components/video-section/video-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    SoftSkillsComponent,
    ProjectsComponent,
    VideoSectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
