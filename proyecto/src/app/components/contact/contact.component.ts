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


  tipoCliente(tipo){

    if(tipo == 1){

      this.clientBtn = {select:true, muted:false};
      this.busBtn =  {select:false, muted:true};
      this.isClient = true;

    }else{
      this.clientBtn = {select:false, muted:true};
      this.busBtn =  {select:true, muted:false};
      this.isClient = false;
      
    }


  }

}
