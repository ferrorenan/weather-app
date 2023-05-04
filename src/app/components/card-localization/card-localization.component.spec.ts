import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLocalizationComponent } from './card-localization.component';

describe('CardLocalizationComponent', () => {
  let component: CardLocalizationComponent;
  let fixture: ComponentFixture<CardLocalizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLocalizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLocalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
