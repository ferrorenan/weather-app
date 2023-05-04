import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardWeatherDataComponent } from './card-weather-data.component';

describe('CardWeatherDataComponent', () => {
  let component: CardWeatherDataComponent;
  let fixture: ComponentFixture<CardWeatherDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardWeatherDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardWeatherDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
