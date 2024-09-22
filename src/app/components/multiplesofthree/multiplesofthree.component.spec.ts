import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplesofthreeComponent } from './multiplesofthree.component';

describe('MultiplesofthreeComponent', () => {
  let component: MultiplesofthreeComponent;
  let fixture: ComponentFixture<MultiplesofthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiplesofthreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiplesofthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
