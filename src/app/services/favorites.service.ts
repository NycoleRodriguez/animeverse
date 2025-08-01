import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.loadFavorites();
  }

  /** Carrega favoritos do localStorage */
  private loadFavorites() {
    if (isPlatformBrowser(this.platformId)) {
      const storedFavorites = localStorage.getItem('favorites');
      this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    }
  }

  /** Salva favoritos no localStorage */
  private saveFavorites() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }

  /** Adiciona ou remove dos favoritos */
  toggleFavorite(anime: any) {
    const index = this.favorites.findIndex(fav => fav.name === anime.name);
    if (index >= 0) {
      this.favorites.splice(index, 1);
    } else {
      this.favorites.push(anime);
    }
    this.saveFavorites();
  }

  /** Verifica se é favorito */
  isFavorite(anime: any): boolean {
    return this.favorites.some(fav => fav.name === anime.name);
  }

  /** Retorna todos os favoritos */
  getFavorites(): any[] {
    return this.favorites;
  }
}
