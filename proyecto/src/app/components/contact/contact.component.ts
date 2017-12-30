import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  clientBtn = {select:true, muted:false};
  busBtn =  {select:false, muted:true};
  isClient:boolean = true;

  ngOnInit() {
  }

}
