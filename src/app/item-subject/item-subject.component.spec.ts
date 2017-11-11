import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSubjectComponent } from './item-subject.component';

describe('ItemSubjectComponent', () => {
  let component: ItemSubjectComponent;
  let fixture: ComponentFixture<ItemSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
