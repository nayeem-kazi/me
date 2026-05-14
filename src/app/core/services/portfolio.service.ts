import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { PortfolioData } from '../models/portfolio.model';

@Injectable({ providedIn: 'root' })
export class PortfolioService {
  private dataUrl = 'assets/data/portfolio-data.json';
  private data$!: Observable<PortfolioData>;

  constructor(private http: HttpClient) {}

  getData(): Observable<PortfolioData> {
    if (!this.data$) {
      this.data$ = this.http.get<PortfolioData>(this.dataUrl).pipe(shareReplay(1));
    }
    return this.data$;
  }
}
