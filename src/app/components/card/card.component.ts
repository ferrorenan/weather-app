import {Component, Input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [
    IconComponent
  ],
  standalone: true
})
export class CardComponent {

  @Input() cardTitle: string;
  @Input() cardClass: string;
}
