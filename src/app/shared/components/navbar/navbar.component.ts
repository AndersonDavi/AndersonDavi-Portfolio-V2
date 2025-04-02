import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NavbarComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;

  setActiveLink(link: string) {
    this.activeLink = link;
    this.isMenuOpen = false;  // Cerrar el menú al hacer clic en un enlace
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
