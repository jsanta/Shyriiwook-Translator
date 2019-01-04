import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslatePage } from './translate.page';

describe('TranslatePage', () => {
  let component: TranslatePage;
  let fixture: ComponentFixture<TranslatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
