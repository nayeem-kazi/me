import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Work Experience</span>
          <h2 class="section-title">My <span class="gradient-text">Career Journey</span></h2>
        </div>

        <div class="timeline">
          @for (exp of experience; track exp.id; let i = $index) {
            <div class="timeline-item" appScrollReveal [revealDelay]="i * 100">
              <div class="timeline-line">
                <div class="timeline-dot" [style.background]="exp.color" [style.box-shadow]="'0 0 0 4px ' + exp.color + '30'">
                  @if (exp.current) {
                    <div class="dot-pulse" [style.background]="exp.color"></div>
                  }
                </div>
                @if (i < experience.length - 1) {
                  <div class="timeline-connector"></div>
                }
              </div>

              <div class="timeline-card">
                <div class="tc-header">
                  <div class="tc-meta">
                    <div class="tc-role-row">
                      <h3 class="tc-role">{{ exp.role }}</h3>
                      @if (exp.current) {
                        <span class="current-badge">Current</span>
                      }
                    </div>
                    <div class="tc-company">
                      <span class="company-name" [style.color]="exp.color">{{ exp.company }}</span>
                      <span class="tc-sep">·</span>
                      <span class="tc-location">{{ exp.location }}</span>
                    </div>
                  </div>
                  <div class="tc-period">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                    {{ exp.period }}
                  </div>
                </div>

                <p class="tc-desc">{{ exp.description }}</p>

                <ul class="tc-achievements">
                  @for (a of exp.achievements; track a) {
                    <li>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {{ a }}
                    </li>
                  }
                </ul>

                <div class="tc-tech">
                  @for (t of exp.tech; track t) {
                    <span class="tech-chip" [style.border-color]="exp.color + '40'" [style.color]="exp.color" [style.background]="exp.color + '10'">{{ t }}</span>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .timeline { display: flex; flex-direction: column; gap: 0; margin-top: 3rem; }
    .timeline-item { display: flex; gap: 1.5rem; }
    .timeline-line {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      padding-top: 0.25rem;
    }
    .timeline-dot {
      width: 16px; height: 16px;
      border-radius: 50%;
      flex-shrink: 0;
      position: relative;
      z-index: 1;
    }
    .dot-pulse {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      opacity: 0.4;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.4; }
      50% { transform: scale(1.5); opacity: 0; }
    }
    .timeline-connector {
      flex: 1;
      width: 2px;
      background: var(--border);
      margin: 6px 0;
      min-height: 2rem;
    }
    .timeline-card {
      flex: 1;
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      backdrop-filter: blur(12px);
      transition: all 0.3s ease;
    }
    .timeline-card:hover {
      border-color: var(--border-hover);
      box-shadow: 0 8px 32px var(--shadow);
      transform: translateX(4px);
    }
    .tc-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1rem;
      flex-wrap: wrap;
    }
    .tc-role-row { display: flex; align-items: center; gap: 0.6rem; flex-wrap: wrap; }
    .tc-role {
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0;
      font-family: 'Sora', sans-serif;
    }
    .current-badge {
      background: rgba(34,197,94,0.12);
      color: #22c55e;
      border: 1px solid rgba(34,197,94,0.3);
      border-radius: 100px;
      padding: 0.15rem 0.6rem;
      font-size: 0.72rem;
      font-weight: 600;
      font-family: 'DM Sans', sans-serif;
    }
    .tc-company {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.875rem;
      margin-top: 0.2rem;
    }
    .company-name { font-weight: 600; font-family: 'DM Sans', sans-serif; }
    .tc-sep { color: var(--text-muted); }
    .tc-location { color: var(--text-muted); }
    .tc-period {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      white-space: nowrap;
      font-family: 'DM Mono', monospace;
    }
    .tc-desc {
      font-size: 0.9rem;
      color: var(--text-secondary);
      line-height: 1.7;
      margin: 0 0 1rem;
      font-family: 'DM Sans', sans-serif;
    }
    .tc-achievements {
      list-style: none;
      padding: 0;
      margin: 0 0 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .tc-achievements li {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      font-size: 0.875rem;
      color: var(--text-secondary);
      line-height: 1.55;
      font-family: 'DM Sans', sans-serif;
    }
    .tc-achievements li svg { flex-shrink: 0; color: #22c55e; margin-top: 2px; }
    .tc-tech { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 1rem; }
    .tech-chip {
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      font-size: 0.75rem;
      font-weight: 600;
      border: 1px solid;
      font-family: 'DM Mono', monospace;
    }
    @media (max-width: 600px) {
      .timeline-item { gap: 1rem; }
      .tc-header { flex-direction: column; }
    }
  `]
})
export class ExperienceComponent {
  @Input() experience!: Experience[];
}
