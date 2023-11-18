import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 16';
   list:any[]=[];
  addtask(item:string)
  {

this.list.push({id:this.list.length,name:item})
console.warn(this.list);
  }
  
}

