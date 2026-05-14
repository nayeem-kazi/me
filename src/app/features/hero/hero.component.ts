import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Personal } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() personal!: Personal;

  typedText = '';
  private phrases: string[] = [];
  private phraseIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timer: ReturnType<typeof setTimeout> | null = null;

  ngOnInit(): void {
    this.phrases = [
      'Java Developer',
      'Spring Boot Engineer',
      'Angular Specialist',
      'Full Stack Developer',
      'API Architect'
    ];
    this.typeLoop();
  }

  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer);
  }

  private typeLoop(): void {
    const current = this.phrases[this.phraseIndex];
    if (this.isDeleting) {
      this.typedText = current.substring(0, --this.charIndex);
    } else {
      this.typedText = current.substring(0, ++this.charIndex);
    }
    let delay = this.isDeleting ? 60 : 110;
    if (!this.isDeleting && this.typedText === current) {
      delay = 1800;
      this.isDeleting = true;
    } else if (this.isDeleting && this.typedText === '') {
      this.isDeleting = false;
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      delay = 400;
    }
    this.timer = setTimeout(() => this.typeLoop(), delay);
  }

  scrollToContact(): void {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  scrollToAbout(): void {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  }
}
