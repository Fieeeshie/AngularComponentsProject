import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameuppercaseComponent } from './usernameuppercase.component';

describe('UsernameuppercaseComponent', () => {
  let component: UsernameuppercaseComponent;
  let fixture: ComponentFixture<UsernameuppercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsernameuppercaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsernameuppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
