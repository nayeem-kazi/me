import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="projects" class="section alt-section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Portfolio</span>
          <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        </div>

        <!-- Filter tabs -->
        <div class="filter-tabs" appScrollReveal>
          @for (cat of categories; track cat) {
            <button class="filter-tab"
                    [class.active]="activeFilter() === cat"
                    (click)="setFilter(cat)">
              {{ cat }}
            </button>
          }
        </div>

        <div class="projects-grid">
          @for (proj of filteredProjects(); track proj.id; let i = $index) {
            <div class="project-card" appScrollReveal [revealDelay]="i * 80"
                 [class.featured]="proj.featured">
              <div class="project-card-top">
                <div class="project-icon" [style.background]="proj.color + '18'" [style.border-color]="proj.color + '30'">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" [style.stroke]="proj.color" stroke-width="2">
                    <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                  </svg>
                </div>
                <div class="project-meta-top">
                  <span class="project-category">{{ proj.category }}</span>
                  <span class="project-status" [class.open]="proj.status === 'Open Source'">{{ proj.status }}</span>
                </div>
              </div>

              <h3 class="project-title">{{ proj.title }}</h3>
              <p class="project-desc">{{ proj.description }}</p>

              <div class="project-tech">
                @for (t of proj.tech.slice(0, 4); track t) {
                  <span class="tech-tag">{{ t }}</span>
                }
                @if (proj.tech.length > 4) {
                  <span class="tech-more">+{{ proj.tech.length - 4 }}</span>
                }
              </div>

              <div class="project-links">
                @if (proj.github) {
                  <a [href]="proj.github" target="_blank" rel="noopener" class="proj-link">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                    Source Code
                  </a>
                }
                @if (proj.live) {
                  <a [href]="proj.live" target="_blank" rel="noopener" class="proj-link live">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    Live Demo
                  </a>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .filter-tabs {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 2rem 0 2.5rem;
    }
    .filter-tab {
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 0.45rem 1rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
      font-family: 'DM Sans', sans-serif;
      backdrop-filter: blur(8px);
    }
    .filter-tab.active,
    .filter-tab:hover {
      background: var(--accent-blue);
      border-color: var(--accent-blue);
      color: white;
    }
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 1.5rem;
    }
    .project-card {
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .project-card:hover {
      transform: translateY(-5px);
      border-color: var(--border-hover);
      box-shadow: 0 16px 40px var(--shadow);
    }
    .project-card.featured {
      border-color: var(--accent-blue);
      box-shadow: 0 0 0 1px rgba(0,120,212,0.1);
    }
    .project-card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .project-icon {
      width: 44px; height: 44px;
      border-radius: 10px;
      border: 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .project-meta-top { display: flex; align-items: center; gap: 0.5rem; }
    .project-category {
      font-size: 0.72rem;
      color: var(--text-muted);
      font-weight: 500;
      font-family: 'DM Sans', sans-serif;
    }
    .project-status {
      font-size: 0.7rem;
      font-weight: 600;
      padding: 0.15rem 0.5rem;
      border-radius: 100px;
      background: rgba(34,197,94,0.1);
      color: #22c55e;
      border: 1px solid rgba(34,197,94,0.25);
      font-family: 'DM Sans', sans-serif;
    }
    .project-status.open {
      background: rgba(0,120,212,0.1);
      color: var(--accent-blue);
      border-color: rgba(0,120,212,0.25);
    }
    .project-title {
      font-size: 1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      font-family: 'Sora', sans-serif;
      line-height: 1.35;
    }
    .project-desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.65;
      margin: 0;
      font-family: 'DM Sans', sans-serif;
      flex: 1;
    }
    .project-tech { display: flex; flex-wrap: wrap; gap: 0.35rem; }
    .tech-tag {
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 0.2rem 0.5rem;
      font-size: 0.72rem;
      font-weight: 500;
      color: var(--text-muted);
      font-family: 'DM Mono', monospace;
    }
    .tech-more {
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      border-radius: 5px;
      padding: 0.2rem 0.5rem;
      font-size: 0.72rem;
      color: var(--text-muted);
      font-family: 'DM Mono', monospace;
    }
    .project-links {
      display: flex;
      gap: 0.5rem;
      margin-top: 0.25rem;
      border-top: 1px solid var(--border);
      padding-top: 0.75rem;
    }
    .proj-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-secondary);
      text-decoration: none;
      padding: 0.35rem 0.7rem;
      border: 1px solid var(--border);
      border-radius: 6px;
      transition: all 0.2s ease;
      font-family: 'DM Sans', sans-serif;
      background: var(--surface-elevated);
    }
    .proj-link:hover {
      color: var(--accent-blue);
      border-color: var(--accent-blue);
    }
    .proj-link.live:hover { color: #22c55e; border-color: #22c55e; }
  `]
})
export class ProjectsComponent {
  @Input() set projects(val: Project[]) {
    this._projects = val;
    this.categories = ['All', ...new Set(val.map(p => p.category))];
  }

  private _projects: Project[] = [];
  categories: string[] = ['All'];
  activeFilter = signal('All');

  filteredProjects = () => {
    const f = this.activeFilter();
    return f === 'All' ? this._projects : this._projects.filter(p => p.category === f);
  };

  setFilter(cat: string): void {
    this.activeFilter.set(cat);
  }
}
