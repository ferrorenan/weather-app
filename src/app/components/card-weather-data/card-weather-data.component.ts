import {Component, Input} from '@angular/core';
import {WeatherResponsePayload} from "../../models/weather-response-payload";
import {TitleCasePipe} from "@angular/common";
import {IconComponent} from "../icon/icon.component";
import {CardComponent} from "../card/card.component";
import {CardWeatherSubtitleComponent} from "../card-weather-subtitle/card-weather-subtitle.component";

@Component({
  selector: 'app-card-weather-data',
  templateUrl: './card-weather-data.component.html',
  styleUrls: ['./card-weather-data.component.scss'],
  standalone: true,
  imports: [
    TitleCasePipe,
    IconComponent,
    CardComponent,
    CardWeatherSubtitleComponent
  ]
})
export class CardWeatherDataComponent {

  @Input() weaherPayload: WeatherResponsePayload;
  getCelciusTemperatureConverted(temperature: number): number {

    return Math.round(temperature - 275.15);
  }
}
