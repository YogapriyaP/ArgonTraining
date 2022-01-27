import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppserviceService {

  userName='Yoga';
  constructor() { }

  getValue()
  {
    return this.userName;
  }
  setValue(value:string)
  {
    this.userName=value;
  }
}
