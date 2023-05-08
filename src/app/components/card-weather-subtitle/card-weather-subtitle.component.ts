import {Component, Input} from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-card-weather-subtitle',
  templateUrl: './card-weather-subtitle.component.html',
  styleUrls: ['./card-weather-subtitle.component.scss'],
  imports: [
    TitleCasePipe
  ],
  standalone: true
})
export class CardWeatherSubtitleComponent {

  @Input() title: string;
}
