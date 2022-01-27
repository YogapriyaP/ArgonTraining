import { Component, OnInit } from '@angular/core';
import { FormControl  , FormGroup, FormBuilder} from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  constructor(public formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.formbuilder.group({
    firstName :['',Validators.required],
    lastName:['']
    
  })

  onSubmit()
  {
   this.profileForm.setValue({firstName:'Yoga',lastName:'Priya'});
  }

}
