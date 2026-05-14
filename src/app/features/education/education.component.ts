import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="education" class="section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Education</span>
          <h2 class="section-title">Academic <span class="gradient-text">Background</span></h2>
        </div>

        <div class="education-list">
          @for (edu of education; track edu.id; let i = $index) {
            <div class="edu-card" appScrollReveal [revealDelay]="i * 100">
              <div class="edu-accent" [style.background]="edu.color"></div>
              <div class="edu-content">
                <div class="edu-header">
                  <div>
                    <h3 class="edu-institution">{{ edu.institution }}</h3>
                    <p class="edu-degree">
                      {{ edu.degree }} in <strong>{{ edu.field }}</strong>
                    </p>
                  </div>
                  <div class="edu-right">
                    <span class="edu-period">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {{ edu.period }}
                    </span>
                    <span class="edu-location">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {{ edu.location }}
                    </span>
                    <span class="edu-grade" [style.color]="edu.color">{{ edu.grade }}</span>
                  </div>
                </div>

                <p class="edu-desc">{{ edu.description }}</p>

                @if (edu.activities.length) {
                  <div class="edu-activities">
                    <span class="activities-label">Activities:</span>
                    @for (act of edu.activities; track act) {
                      <span class="activity-chip">{{ act }}</span>
                    }
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
    .education-list { display: flex; flex-direction: column; gap: 1.5rem; margin-top: 3rem; }
    .edu-card {
      display: flex;
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    }
    .edu-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 32px var(--shadow);
      border-color: var(--border-hover);
    }
    .edu-accent { width: 5px; flex-shrink: 0; }
    .edu-content { padding: 1.75rem; flex: 1; }
    .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin-bottom: 1rem;
    }
    .edu-institution {
      font-size: 1.1rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.3rem;
      font-family: 'Sora', sans-serif;
    }
    .edu-degree {
      font-size: 0.9rem;
      color: var(--text-secondary);
      margin: 0;
      font-family: 'DM Sans', sans-serif;
    }
    .edu-degree strong { color: var(--text-primary); font-weight: 600; }
    .edu-right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 0.4rem;
      flex-shrink: 0;
    }
    .edu-period, .edu-location {
      display: flex;
      align-items: center;
      gap: 0.3rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      font-family: 'DM Mono', monospace;
    }
    .edu-grade {
      font-size: 0.82rem;
      font-weight: 700;
      font-family: 'DM Sans', sans-serif;
    }
    .edu-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin: 0 0 1rem;
      font-family: 'DM Sans', sans-serif;
    }
    .edu-activities { display: flex; align-items: center; flex-wrap: wrap; gap: 0.5rem; }
    .activities-label {
      font-size: 0.78rem;
      font-weight: 600;
      color: var(--text-muted);
      font-family: 'DM Sans', sans-serif;
    }
    .activity-chip {
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      border-radius: 6px;
      padding: 0.2rem 0.6rem;
      font-size: 0.75rem;
      color: var(--text-secondary);
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
    }
    @media (max-width: 600px) {
      .edu-header { flex-direction: column; }
      .edu-right { align-items: flex-start; }
    }
  `]
})
export class EducationComponent {
  @Input() education!: Education[];
}
