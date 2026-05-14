import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Certification } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  template: `
    <section id="certifications" class="section alt-section">
      <div class="container">
        <div class="section-header" appScrollReveal>
          <span class="section-label">Certifications</span>
          <h2 class="section-title">Licenses & <span class="gradient-text">Credentials</span></h2>
        </div>

        <div class="cert-grid">
          @for (cert of certifications; track cert.id; let i = $index) {
            <a [href]="cert.url" target="_blank" rel="noopener"
               class="cert-card" appScrollReveal [revealDelay]="i * 80"
               [style.--cert-color]="cert.color">
              <div class="cert-badge">{{ cert.badge }}</div>
              <div class="cert-body">
                <h4 class="cert-name">{{ cert.name }}</h4>
                <div class="cert-meta">
                  <span class="cert-issuer">{{ cert.issuer }}</span>
                  <span class="cert-sep">·</span>
                  <span class="cert-date">{{ cert.date }}</span>
                </div>
              </div>
              <div class="cert-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <path d="M7 17L17 7M17 7H7M17 7v10"/>
                </svg>
              </div>
            </a>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .cert-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
      gap: 1.25rem;
      margin-top: 3rem;
    }
    .cert-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--glass-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 1.25rem;
      backdrop-filter: blur(12px);
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .cert-card::before {
      content: '';
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 3px;
      background: var(--cert-color);
      border-radius: 0 2px 2px 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .cert-card:hover {
      transform: translateY(-4px);
      border-color: var(--cert-color, var(--border-hover));
      box-shadow: 0 10px 30px var(--shadow);
    }
    .cert-card:hover::before { opacity: 1; }
    .cert-badge {
      font-size: 1.75rem;
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--surface-elevated);
      border: 1px solid var(--border);
      border-radius: 12px;
    }
    .cert-body { flex: 1; min-width: 0; }
    .cert-name {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--text-primary);
      margin: 0 0 0.3rem;
      font-family: 'Sora', sans-serif;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cert-meta {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      font-size: 0.78rem;
      color: var(--text-muted);
      font-family: 'DM Sans', sans-serif;
    }
    .cert-sep { color: var(--border); }
    .cert-date { font-family: 'DM Mono', monospace; }
    .cert-arrow {
      color: var(--text-muted);
      flex-shrink: 0;
      transition: all 0.2s ease;
    }
    .cert-card:hover .cert-arrow {
      color: var(--cert-color);
      transform: translate(2px, -2px);
    }
  `]
})
export class CertificationsComponent {
  @Input() certifications!: Certification[];
}
