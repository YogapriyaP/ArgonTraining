import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { AppserviceService } from '../appservice.service';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  
  @Input() pageTitle:string=''; 
  greetings:string='Welcome'
  

 @Output() welcomeEvent= new EventEmitter();
  constructor(public service:AppserviceService) { }
  name=this.service.setValue('yoga');

  ngOnInit(): void {
  }
  greet()
  {
    this.welcomeEvent.emit(this.greetings);
  }

}
