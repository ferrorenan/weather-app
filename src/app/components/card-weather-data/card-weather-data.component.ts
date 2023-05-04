import {Component, Input} from '@angular/core';
import {WeatherResponsePayload} from "../../models/weather-response-payload";
import {ImageComponent} from "../image/image.component";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-card-weather-data',
  templateUrl: './card-weather-data.component.html',
  styleUrls: ['./card-weather-data.component.scss'],
  standalone: true,
  imports: [
    ImageComponent,
    TitleCasePipe
  ]
})
export class CardWeatherDataComponent {

  @Input() weaherPayload: WeatherResponsePayload;
  getCelciusTemperatureConverted(temperature: number): number {

    console.log((temperature - 32) / 1.8);

    return Math.round(temperature - 275.15);
  }
}
