import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { SecondPageComponent } from './second-page.component';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageComponent ],
      providers:[FormBuilder]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
