import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttitleComponent } from './texttitle.component';

describe('TexttitleComponent', () => {
  let component: TexttitleComponent;
  let fixture: ComponentFixture<TexttitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TexttitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TexttitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
