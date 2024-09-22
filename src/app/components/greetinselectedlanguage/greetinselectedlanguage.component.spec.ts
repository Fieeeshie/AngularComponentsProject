import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetinselectedlanguageComponent } from './greetinselectedlanguage.component';

describe('GreetinselectedlanguageComponent', () => {
  let component: GreetinselectedlanguageComponent;
  let fixture: ComponentFixture<GreetinselectedlanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreetinselectedlanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreetinselectedlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
