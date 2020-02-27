import { Component, OnInit } from '@angular/core';
import  *  as  data  from  '../../../addressbook.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-adress',
  templateUrl: './adress.component.html',
  styleUrls: ['./adress.component.css']
})
export class AdressComponent implements OnInit {
  products: any = (data as any).default;
 table:any;

 input:any;
 filter:any;
 ul:any;
 li:any;
 a:any;
 i:any;
 txtValue:any;
 id:any;

  constructor() { 
  
  }

  ngOnInit() {
    console.log(data["address-book"]);
 this.table=data["address-book"];
  
}
 myFunction(){
  this.input = document.getElementById("myInput");
  this.filter = this.input.value.toUpperCase();
  this.ul = document.getElementById("myUL");
  this.li = this.ul.getElementsByTagName("li");
  for (this.i = 0; this.i < this.li.length; this.i++) {
    this.a = this.li[this.i].getElementsByTagName("a")[0];
    this.txtValue = this.a.textContent || this.a.innerText;
    if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
        this.li[this.i].style.display = "";
    } else {
        this.li[this.i].style.display = "none";
    }
}
}
}

