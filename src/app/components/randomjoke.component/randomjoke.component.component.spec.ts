import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomjokeComponentComponent } from './randomjoke.component.component';

describe('RandomjokeComponentComponent', () => {
  let component: RandomjokeComponentComponent;
  let fixture: ComponentFixture<RandomjokeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomjokeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomjokeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
