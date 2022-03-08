import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaguagesComponent } from './laguages.component';

describe('LaguagesComponent', () => {
  let component: LaguagesComponent;
  let fixture: ComponentFixture<LaguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaguagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
