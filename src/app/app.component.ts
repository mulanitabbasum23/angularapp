import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  data: string = "Hi All";

  count = 0;

  IncreaseCount(){
    this.count++;
  }
  fromChild(event:any){
    console.log('after output decorator', event);
    //console.log(value)
    //console.log(event.target.value)
  }
  fromChildEmp(event:any){
    // console.log('Employee Information', event);

  }

}