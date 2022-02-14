import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  color='primary';
  clicked='false';
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick()
  {
    this.clicked='true';
    

    if(this.color=='warn'){
      this.color='primary';
    }
    else{
      this.color='warn';
    }
  }

}
