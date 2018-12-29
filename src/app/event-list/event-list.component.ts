import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  event1={
    id:1,
    name:'Angular Connect',
    price:599,
    time:'10:00 AM',
    imageUrl:'assets/images/angularconnect-sheild.png',
    location:{
      address:'15606 NE 40th Street',
      city:'redmond',
      country:'USA'
    }
   

  }
  handleeventclick(dataevent)
  {
    console.log("eventreceive","able to catch child event "+dataevent)
    
  }
}
