import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ButtonComponent } from './button.component';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonHarness} from '@angular/material/button/testing';


describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let loader:HarnessLoader;
  let buttonHarness=MatButtonHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatButtonModule],
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader=TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load button with exact text',async()=>{
    const button=await loader.getAllHarnesses(buttonHarness.with({text:'Click Here'}));
    expect(button.length).toBe(1);
  })


});
