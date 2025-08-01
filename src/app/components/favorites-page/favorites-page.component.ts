import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {
  favorites: any[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  /** Remove um anime dos favoritos */
  removeFavorite(anime: any) {
    this.favoritesService.toggleFavorite(anime);
    this.favorites = this.favoritesService.getFavorites(); // atualiza lista
  }
}
