import {Component, Input} from '@angular/core';
import {ImageComponent} from "../image/image.component";

@Component({
  selector: 'app-card-localization',
  templateUrl: './card-localization.component.html',
  styleUrls: ['./card-localization.component.scss'],
  standalone: true,
  imports: [
    ImageComponent
  ]
})
export class CardLocalizationComponent {

  @Input() city: string;
  @Input() country: string;
}
