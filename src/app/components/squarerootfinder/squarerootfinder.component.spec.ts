import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquarerootfinderComponent } from './squarerootfinder.component';

describe('SquarerootfinderComponent', () => {
  let component: SquarerootfinderComponent;
  let fixture: ComponentFixture<SquarerootfinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquarerootfinderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquarerootfinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
