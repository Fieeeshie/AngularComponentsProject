import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgeindaysComponentComponent } from './ageindays.component.component';

describe('AgeindaysComponentComponent', () => {
  let component: AgeindaysComponentComponent;
  let fixture: ComponentFixture<AgeindaysComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgeindaysComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgeindaysComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
