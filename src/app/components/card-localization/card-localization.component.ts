import {Component, Input} from '@angular/core';
import {IconComponent} from "../icon/icon.component";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-card-localization',
  templateUrl: './card-localization.component.html',
  styleUrls: ['./card-localization.component.scss'],
  standalone: true,
  imports: [
    IconComponent,
    CardComponent
  ]
})
export class CardLocalizationComponent {

  @Input() city: string;
  @Input() country: string;
}
