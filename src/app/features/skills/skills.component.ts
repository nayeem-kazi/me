import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="skills" class="section alt-section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Technical Skills</span>
          <h2 class="section-title">My <span class="gradient-text">Tech Stack</span></h2>
        </div>

        <div class="skills-grid">
          @for (cat of skills; track cat.category; let i = $index) {
            <div class="skill-card" appScrollReveal [revealDelay]="i * 80">
              <div class="skill-card-header">
                <span class="skill-category-badge" [style.background]="cat.color + '18'" [style.border-color]="cat.color + '40'" [style.color]="cat.color">
                  {{ cat.category }}
                </span>
              </div>
              <div class="skill-items">
                @for (item of cat.items; track item.name) {
                  <div class="skill-item">
                    <div class="skill-meta">
                      <span class="skill-name">{{ item.name }}</span>
                    </div>
                    <div class="skill-bar-bg">
                      <div class="skill-bar-fill"
                           [style.background]="cat.color">
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-top: 3rem;
    }
    .skill-card {
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    }
    .skill-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px var(--shadow);
      border-color: var(--border-hover);
    }
    .skill-card-header { margin-bottom: 1.25rem; }
    .skill-category-badge {
      display: inline-block;
      padding: 0.3rem 0.75rem;
      border-radius: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      border: 1px solid;
      letter-spacing: 0.05em;
      font-family: 'Sora', sans-serif;
    }
    .skill-items { display: flex; flex-direction: column; gap: 0.9rem; }
    .skill-item { display: flex; flex-direction: column; gap: 0.35rem; }
    .skill-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .skill-name { font-size: 0.875rem; font-weight: 500; color: var(--text-primary); font-family: 'DM Sans', sans-serif; }
    .skill-pct { font-size: 0.78rem; font-weight: 600; color: var(--text-muted); font-family: 'DM Mono', monospace; }
    .skill-bar-bg {
      height: 6px;
      background: var(--border);
      border-radius: 100px;
      overflow: hidden;
    }
    .skill-bar-fill {
      height: 100%;
      border-radius: 100px;
      animation: growBar 1.2s ease-out forwards;
      transform-origin: left;
    }
    @keyframes growBar {
      from { width: 0 !important; }
    }
  `]
})
export class SkillsComponent {
  @Input() skills!: SkillCategory[];
}
