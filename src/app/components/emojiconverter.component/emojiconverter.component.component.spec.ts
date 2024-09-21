import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojiconverterComponentComponent } from './emojiconverter.component.component';

describe('EmojiconverterComponentComponent', () => {
  let component: EmojiconverterComponentComponent;
  let fixture: ComponentFixture<EmojiconverterComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmojiconverterComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmojiconverterComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
