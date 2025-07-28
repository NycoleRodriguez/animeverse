import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anime-page',
  standalone: true,
  imports: [CommonModule, NgbModule],
  templateUrl: './anime-page.component.html',
  styleUrls: ['./anime-page.component.scss']
})
export class AnimePageComponent {
  animes = [
    {
      name: 'Jujutsu Kaisen',
      image: '/assets/jujutsu.png',
      description: 'Yuuji se envolve com maldições perigosas após consumir um dedo amaldiçoado.'
    },
    {
      name: 'One Piece',
      image: '/assets/onepiece.png',
      description: 'Luffy navega com sua tripulação para encontrar o maior tesouro do mundo.'
    },
    {
      name: 'Bleach',
      image: '/assets/bleach.png',
      description: 'Ichigo se torna um Shinigami para proteger o mundo dos hollows.'
    },
    {
      name: 'Chainsaw Man',
      image: '/assets/chainsaw.png',
      description: 'Denji, com um demônio-motosserra, luta contra criaturas demoníacas.'
    },
    {
      name: 'Mashle',
      image: '/assets/mashle.png',
      description: 'Mash vive num mundo mágico onde ele compensa a falta de magia com pura força física.'
    },
    {
      name: 'Demon Slayer',
      image: '/assets/demonslayer.png',
      description: 'Tanjiro luta contra demônios para curar sua irmã e vingar sua família.'
    }
  ];

  destaques = [
    {
      title: 'Demon Slayer',
      description: 'A luta entre caçadores e demônios atinge novos patamares!',
      image: '/assets/demonslayer.png'
    },
    {
      title: 'One Piece',
      description: 'A nova saga começa! Luffy segue rumo ao tesouro lendário.',
      image: '/assets/onepiece.png'
    },
    {
      title: 'Chainsaw Man',
      description: 'Ação, sangue e motosserras: prepare-se para o caos.',
      image: '/assets/chainsaw.png'
    }
  ];

  selectedAnime: any = null;

  constructor(private modalService: NgbModal) {}

  openDetails(content: any, anime: any) {
    this.selectedAnime = anime;
    this.modalService.open(content, { centered: true });
  }
}
