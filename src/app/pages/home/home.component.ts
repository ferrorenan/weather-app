import {Component, OnInit} from '@angular/core';
import {LocalizationService} from "../../services/localization.service";
import {WeatherService} from "../../services/weather.service";
import {Observable} from "rxjs";
import {WeatherResponsePayload} from "../../models/weather-response-payload";
import {Picture} from "../../models/picture";
import {Meta} from "@angular/platform-browser";
import {environment} from "../../../environments/environment";

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

  imageBanner: Picture = {
    title: 'Weather news',
    alt: 'Shapre decorator of a woman',
    width: '330',
    height: '300',
    sources: [
      {
        minWidth: '(min-width: 1px)',
        typeImg: 'image/webp',
        srcSets: [
          'assets/images/img-advice.webp, assets/images/img-advice@2x.webp 2x'
        ]
      },
      {
        minWidth: '(min-width: 1px)',
        typeImg: 'image/jpeg',
        srcSets: [
          'assets/images/img-advice.png, assets/images/img-advice@2x.png 2x'
        ]
      },
    ],
  };

  constructor(
    private locationService: LocalizationService,
    private _weatherApiService: WeatherService,
    private _metaTagManager: Meta
  ) {}

  ngOnInit(): void {

    this.getClientLatAndAlt();
  }

  updateMetaTagDescription(): void {

    this._metaTagManager.updateTag({
      name: 'description',
      content: environment.applicationDescription,
    });
  }

  getClientLatAndAlt(): void {

    this.locationService.getPosition()
      .then(pos => {
        this.clientLatitude = pos.lat;
        this.clientLongitute = pos.lng;
      })
      .finally(() => {
        this.disableGetWeatherNewsButton = false;
      });
  }

  getClientWeatherData(): void {

    this.weatherData$ = this._weatherApiService
      .getWeatherData(this.clientLatitude, this.clientLongitute);
  }
}
