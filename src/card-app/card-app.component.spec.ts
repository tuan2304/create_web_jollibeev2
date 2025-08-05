import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAppComponent } from './card-app.component';

describe('CardAppComponent', () => {
  let component: CardAppComponent;
  let fixture: ComponentFixture<CardAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
