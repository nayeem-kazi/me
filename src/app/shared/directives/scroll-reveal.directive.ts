import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements OnInit {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'left' | 'right' | 'fade' = 'up';

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    el.style.opacity = '0';
    el.style.transition = `opacity 0.7s ease ${this.revealDelay}ms, transform 0.7s ease ${this.revealDelay}ms`;

    switch (this.revealDirection) {
      case 'up': el.style.transform = 'translateY(40px)'; break;
      case 'left': el.style.transform = 'translateX(-40px)'; break;
      case 'right': el.style.transform = 'translateX(40px)'; break;
      case 'fade': el.style.transform = 'scale(0.95)'; break;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'none';
          }, 10);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.12 });

    observer.observe(el);
  }
}
