import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { AutocompleteComponent } from './autocomplete.component';
import {HarnessLoader} from '@angular/cdk/testing';
import {MatAutocompleteHarness} from '@angular/material/autocomplete/testing';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;
  let loader:HarnessLoader;
  let autocompleteHarness=MatAutocompleteHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[MatAutocompleteModule],
      declarations: [ AutocompleteComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader=TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

 it('should load all autocomplete harnesses', async () => {
    const autocompletes = await loader.getAllHarnesses(autocompleteHarness);
    expect(autocompletes.length).toBe(2);
  });

 

});

