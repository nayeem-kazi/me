import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact, Personal } from '../../core/models/portfolio.model';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() contact!: Contact;
  @Input() personal!: Personal;

  formData = { name: '', email: '', subject: '', message: '' };
  submitting = signal(false);
  submitted = signal(false);

  submitForm(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;
    this.submitting.set(true);
    // Simulate submission — replace with real API call
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
      this.formData = { name: '', email: '', subject: '', message: '' };
      setTimeout(() => this.submitted.set(false), 5000);
    }, 1200);
  }

  infoItems() {
    return [
      { icon: '📧', label: 'Email', value: this.personal.email, href: `mailto:${this.personal.email}` },
      { icon: '📍', label: 'Location', value: this.personal.location, href: null },
      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nayeem-kazi', href: this.personal.linkedin },
      { icon: '⏱️', label: 'Response', value: this.contact.responseTime, href: null }
    ];
  }
}
