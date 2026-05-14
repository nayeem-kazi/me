import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from '../../../core/services/portfolio.service';
import { Personal } from '../../../core/models/portfolio.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (personal) {
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-brand">
          <span class="brand-icon">NK</span>
          <span class="brand-text">Md. Nayeem Kazi</span>
        </div>
        <p class="footer-copy">© {{ year }} · Built with Angular &amp; ❤️ · Java | Spring Boot | Angular</p>
        <div class="footer-links">
          <a [href]="personal.linkedin" target="_blank" rel="noopener">LinkedIn</a>
          <a [href]="personal.github" target="_blank" rel="noopener">GitHub</a>
          <a [href]="'mailto:' + personal.email">Email</a>
        </div>
      </div>
    </footer>
    }
  `,
  styles: [`
    .footer { background: var(--surface); border-top: 1px solid var(--border); padding: 2.5rem 2rem; margin-top: 0; }
    .footer-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; }
    .footer-brand { display: flex; align-items: center; gap: 0.6rem; }
    .brand-icon { width: 32px; height: 32px; background: var(--gradient-primary); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.75rem; color: white; font-family: 'Sora', sans-serif; }
    .brand-text { font-weight: 600; font-family: 'Sora', sans-serif; color: var(--text-primary); font-size: 0.95rem; }
    .footer-copy { color: var(--text-muted); font-size: 0.85rem; margin: 0; }
    .footer-links { display: flex; gap: 1.5rem; }
    .footer-links a { color: var(--text-secondary); font-size: 0.875rem; text-decoration: none; transition: color 0.2s; }
    .footer-links a:hover { color: var(--accent-blue); }
    @media (max-width: 600px) { .footer-inner { flex-direction: column; text-align: center; } }
  `]
})
export class FooterComponent implements OnInit {
  private svc = inject(PortfolioService);
  personal!: Personal;
  year = new Date().getFullYear();

  ngOnInit(): void {
    this.svc.getData().subscribe(d => this.personal = d.personal);
  }
}
