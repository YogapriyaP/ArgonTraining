import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  constructor() { }
  
   name=new FormControl('');

  ngOnInit(): void {
  }
  updateValue(){
    this.name.setValue('Priya')
  }


}
