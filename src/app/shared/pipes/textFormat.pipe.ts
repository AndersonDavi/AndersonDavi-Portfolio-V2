import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'textFormat',
  standalone: true,
})
export class TextFormatPipe implements PipeTransform {
  constructor() {}
  transform(value: string): string {
    return value.replace(
      /#(.*?)#/g,
      '<span class="text-primary-500">$1</span>'
    );
  }
}
