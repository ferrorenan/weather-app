import {Component, Input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [
    IconComponent
  ],
})
export class CardComponent {

  @Input({ required: true }) cardTitle: string;
  @Input() cardClass: string;
}
