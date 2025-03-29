import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/components/footer/footer.component";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CurriculumListComponent } from "./landing/components/curriculum-list/curriculum-list.component";
import { SkillsListComponent } from "./landing/components/skills-list/skills-list.component";

@Component({
  selector: 'app-root',
  imports: [FooterComponent, NavbarComponent, CurriculumListComponent, SkillsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mi-portafolioV2';
}
