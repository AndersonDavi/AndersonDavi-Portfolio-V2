import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hover-string',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hoverString.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverStringComponent {
  @Input()
  public text: string = '';

  @Input()
  public growSize: string = '8xl';

  public getCharacters(): { char: string; isPrimary: boolean }[] {
    const parts = this.text.split(/(#.*?#)/g);
    return parts.flatMap((part): { char: string; isPrimary: boolean }[] => {
      if (part.startsWith('#') && part.endsWith('#')) {
        const innerText = part.slice(1, -1);
        return innerText.split('').map(char => ({ char, isPrimary: true }));
      }
      return part.split('').map(char => ({ char, isPrimary: false }));
    });
  }

  public getCleanText(): string {
    return this.text.replace(/#/g, '');
  }
}
