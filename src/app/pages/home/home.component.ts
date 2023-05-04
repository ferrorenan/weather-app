import {Component, OnInit} from '@angular/core';
import {LocalizationService} from "../../services/localization.service";
import {WeatherService} from "../../services/weather.service";
import {Observable} from "rxjs";
import {WeatherResponsePayload} from "../../models/weather-response-payload";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private clientLongitute: string = '';
  private clientLatitude: string = '';

  disableGetWeatherNewsButton: boolean = true;

  weatherData$: Observable<WeatherResponsePayload>;

  constructor(
    private locationService: LocalizationService,
    private _weatherApiService: WeatherService
  ) {}

  ngOnInit(): void {

    this.getClientLatAndAlt();
  }

  getClientLatAndAlt(): void {

    this.locationService.getPosition()
      .then(pos => {

        this.clientLatitude = pos.lat;
        this.clientLongitute = pos.lng;

        console.log(`Positon: ${pos.lng} ${pos.lat}`);
      })
      .finally(() => {
        console.log('Was finalized');
        this.disableGetWeatherNewsButton = false;
      });
  }

  getClientWeatherData(): void {

    this.weatherData$ = this._weatherApiService
      .getWeatherData(this.clientLatitude, this.clientLongitute);
  }
}
