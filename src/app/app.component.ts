import { Component } from '@angular/core';
import  *  as  data  from  '../../addressbook.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ngOnInit(){
    console.log(data);

  }
}
