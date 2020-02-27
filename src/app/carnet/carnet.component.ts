import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.component.html',
  styleUrls: ['./carnet.component.css']
})
export class CarnetComponent implements OnInit {
id:any;
  constructor(private route:ActivatedRoute) { 
    this.id =this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
  }

}
