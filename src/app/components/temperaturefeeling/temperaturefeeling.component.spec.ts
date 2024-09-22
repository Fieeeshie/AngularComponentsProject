import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturefeelingComponent } from './temperaturefeeling.component';

describe('TemperaturefeelingComponent', () => {
  let component: TemperaturefeelingComponent;
  let fixture: ComponentFixture<TemperaturefeelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemperaturefeelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperaturefeelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
