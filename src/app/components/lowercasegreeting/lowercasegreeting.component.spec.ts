import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercasegreetingComponent } from './lowercasegreeting.component';

describe('LowercasegreetingComponent', () => {
  let component: LowercasegreetingComponent;
  let fixture: ComponentFixture<LowercasegreetingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowercasegreetingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercasegreetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
