import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    
  })


  it('should create the app', () => {
   
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should call the onclick() function', fakeAsync(() => {
    spyOn(component, 'onClick');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onClick).toHaveBeenCalled();
  
  }));

  it('should change the button text to clicked',fakeAsync(()=>{
    component.onClick();
    expect(component.click).toBe('Clicked!!');
   
  }));

  it('should focus the input when the component is loaded',()=>{
    
  fixture.detectChanges();
  let element=component.nameRef.nativeElement;
  spyOn(element,'focus');
  expect(element.focus).toBeTruthy();
  

  })

  
 
   
  });

