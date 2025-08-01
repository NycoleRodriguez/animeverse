import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent {
  @Input() destaques: { title: string; description: string; image: string }[] = [];
}
