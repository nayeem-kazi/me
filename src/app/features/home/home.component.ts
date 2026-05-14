import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../core/services/portfolio.service';
import { PortfolioData } from '../../core/models/portfolio.model';
import { HeroComponent } from '../hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { EducationComponent } from '../education/education.component';
import { CertificationsComponent } from '../certifications/certifications.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    CertificationsComponent,
    ContactComponent
  ],
  template: `
    @if (data) {
      <app-hero [personal]="data.personal" />
      <app-about [about]="data.about" [personal]="data.personal" />
      <app-skills [skills]="data.skills" />
      <app-experience [experience]="data.experience" />
      <app-projects [projects]="data.projects" />
      <app-education [education]="data.education" />
      <app-certifications [certifications]="data.certifications" />
      <app-contact [contact]="data.contact" [personal]="data.personal" />
    } @else {
      <div class="loading-screen">
        <div class="loader">
          <div class="loader-ring"></div>
          <p>Loading portfolio...</p>
        </div>
      </div>
    }
  `,
  styles: [`
    .loading-screen {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--bg);
    }
    .loader { text-align: center; }
    .loader-ring {
      width: 56px; height: 56px;
      border: 3px solid var(--border);
      border-top-color: var(--accent-blue);
      border-radius: 50%;
      animation: spin 0.9s linear infinite;
      margin: 0 auto 1rem;
    }
    .loader p { color: var(--text-muted); font-family: 'DM Sans', sans-serif; font-size: 0.9rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class HomeComponent implements OnInit {
  private svc = inject(PortfolioService);
  data!: PortfolioData;

  ngOnInit(): void {
    this.svc.getData().subscribe(d => this.data = d);
  }
}
