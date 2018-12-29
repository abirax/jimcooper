import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event-service.component';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService:EventService) { }
events:any[]
  ngOnInit() {
  this.getEvents();
  }


  getEvents()
  {
   this.events= this.eventService.getEvents();
  
  }
  
  handleeventclick(dataevent)
  {
    console.log("eventreceive","able to catch child event "+dataevent)
    
  }
}
