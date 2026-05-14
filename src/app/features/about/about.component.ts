import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { About, Personal } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="about" class="section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">About Me</span>
          <h2 class="section-title">Passionate About <span class="gradient-text">Clean Code</span></h2>
        </div>

        <div class="about-grid">
          <div class="about-text" appScrollReveal revealDirection="left">
            <p class="bio">{{ about.bio }}</p>
            <p class="bio bio2">{{ about.bio2 }}</p>
            <div class="about-actions">
              <a [href]="personal.linkedin" target="_blank" rel="noopener" class="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                View LinkedIn
              </a>
              <a [href]="personal.github" target="_blank" rel="noopener" class="btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                View GitHub
              </a>
            </div>
          </div>

          <div class="highlights-grid" appScrollReveal revealDirection="right">
            @for (h of about.highlights; track h.label) {
              <div class="highlight-card">
                <span class="highlight-icon">{{ h.icon }}</span>
                <h4 class="highlight-label">{{ h.label }}</h4>
                <p class="highlight-desc">{{ h.description }}</p>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: start;
      margin-top: 3rem;
    }
    .bio {
      color: var(--text-secondary);
      line-height: 1.8;
      font-size: 1rem;
      margin: 0 0 1rem;
      font-family: 'DM Sans', sans-serif;
    }
    .about-actions {
      display: flex;
      gap: 0.75rem;
      margin-top: 1.5rem;
      flex-wrap: wrap;
    }
    .btn-outline {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      border: 1.5px solid var(--border);
      border-radius: 8px;
      padding: 0.6rem 1.1rem;
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--text-primary);
      text-decoration: none;
      transition: all 0.2s ease;
      font-family: 'DM Sans', sans-serif;
      background: var(--glass-bg);
      backdrop-filter: blur(10px);
    }
    .btn-outline:hover {
      border-color: var(--accent-blue);
      color: var(--accent-blue);
      transform: translateY(-2px);
    }
    .highlights-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
    .highlight-card {
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.25rem;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    .highlight-card:hover {
      border-color: var(--accent-blue);
      transform: translateY(-3px);
      box-shadow: 0 8px 24px var(--shadow);
    }
    .highlight-icon { font-size: 1.5rem; display: block; margin-bottom: 0.5rem; }
    .highlight-label {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.35rem;
      font-family: 'Sora', sans-serif;
    }
    .highlight-desc {
      font-size: 0.8rem;
      color: var(--text-muted);
      line-height: 1.5;
      margin: 0;
      font-family: 'DM Sans', sans-serif;
    }
    @media (max-width: 900px) {
      .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    }
    @media (max-width: 480px) {
      .highlights-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class AboutComponent {
  @Input() about!: About;
  @Input() personal!: Personal;
}
