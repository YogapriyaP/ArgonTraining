import { AfterViewInit, Component, ElementRef, ViewChild,EventEmitter } from '@angular/core';
import { AppserviceService } from './appservice.service';
import { Subject,of, Observable,Observer} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements AfterViewInit{
  constructor(public service:AppserviceService) { 
    var obs$=new Observable(observer=>{
      console.log('Observable created');
      observer.next('obs$');
      observer.complete();
      
    })

    obs$.subscribe((x)=>{
      console.log(x+'Subscribed');
    },
    )

    var subject:Subject<any>=new Subject();
    
    subject.subscribe(x=>console.log(x));
    subject.next('1');
    
    subject.subscribe(x=>console.log(x+'x'));
    subject.next('2');
    

    subject.subscribe(x=>console.log(x+'xx'));
    subject.next('3');
    
  }
  //Interpolation 
  pageTitle="Argon Training";
  imgUrl='http://picsum.photos/200';



  //EventBinding
  count=0;
  incrementCount()
  {
    this.count++;
  }
  //Two Way Binding
  name=this.service.getValue();


  //getters and setters
  private _username:string='';
  get username():string{
    return this._username;
  }
   set username(value:string)
   {
     this._username=value;
     if(value==='yoga')
     {
       alert('Welcome Yoga');
     }
   }

   //ViewChild
   
  @ViewChild('nameRef') nameRef!: ElementRef;

  ngAfterViewInit(): void {
      this.nameRef.nativeElement.focus();
  }
  //services
  greet(){
    alert(`welcome ${this.name}`);
  }
  

  //Mock button click

  click='Click';

  onClick()
  {
    this.click='Clicked!!';
  }

  
  

}
