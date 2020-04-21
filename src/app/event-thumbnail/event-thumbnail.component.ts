import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]" >
  <h2>
    {{event?.name}}
  </h2>
  <div>Date:{{event?.date}}</div>
  <div [ngSwitch]="event?.time" [class.green]="event?.time=='8:00 am'" [class.bold]="event?.time=='8:00 am'" >Time:{{event?.time}}
  <span *ngSwitchCase="'8:00 am'">Early Start</span>
  <span *ngSwitchCase="'10:00 am'">Late Start</span>
  <span *ngSwitchDefault>Normal Start</span>
  </div>
  <div>Price:\${{event?.price}}</div>
  <div *ngIf="event?.location">
    <span>Location:{{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}},{{event?.location?.country}}</span>
  </div>
  <div *ngIf="event?.OnlineUrl">Onlineurl:{{event?.OnlineUrl}}</div>
<button class="btn btn-primary" (click)="btnClicked()">Click Me</button>
</div>
`,
styles:[`
.thumbnail {min-height: 210px; }
.pad-left {margin-left:10px;}
.well div { color: #bbb;}
.green { color: #003300 !important;} 
.bold { font-weight: bold ;}

`]
})
export class EventThumbnailComponent implements OnInit {
@Input() event:any
@Output() eventClick= new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  btnClicked()
  {
    console.log("button clicked");
    this.eventClick.emit(this.event.name);
  }
  getlocation()
  {
    console.log("getting location");
    console.log(this.event.location.city);
  }

}
