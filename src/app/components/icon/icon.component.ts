import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  standalone: true
})
export class IconComponent {

  @Input({ required: true }) pathImage: string;
  @Input() imageClass: string;
  @Input() width: number = 1;
  @Input() height: number = 1;
}
