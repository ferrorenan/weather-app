import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWeatherSubtitleComponent } from './card-weather-subtitle.component';

describe('CardWeatherSubtitleComponent', () => {
  let component: CardWeatherSubtitleComponent;
  let fixture: ComponentFixture<CardWeatherSubtitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWeatherSubtitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWeatherSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
