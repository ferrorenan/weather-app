import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  standalone: true,
})
export class ImageComponent {

  @Input() pathImage: string | undefined = '';
  @Input() imageClass = '';
  @Input() width = 50;
  @Input() height = 50;
}
