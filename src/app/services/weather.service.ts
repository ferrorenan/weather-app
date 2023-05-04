import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, tap} from "rxjs";
import {WeatherResponsePayload} from "../models/weather-response-payload";

@Injectable()
export class WeatherService {

  private readonly apiKey: string = environment.apiTokenKey;
  private readonly weatherApiName: string = 'weather?';

  constructor(
    private _httpClient: HttpClient
  ) { }

  getWeatherData(latitude: string, longitue: string): Observable<WeatherResponsePayload> {

    return this._httpClient.get<WeatherResponsePayload>(
      `${this.weatherApiName}lat=${latitude}&lon=${longitue}&appid=${this.apiKey}`
    );
  }
}
