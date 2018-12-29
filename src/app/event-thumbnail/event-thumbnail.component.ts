import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
  <h2>
    {{event.name}}
  </h2>
  <div>Date:{{event.date}}</div>
  <div>Time:{{event.time}}</div>
  <div>Price:\${{event.price}}</div>
  <div>
    <span>Location:{{event.location.address}}</span>
    <span>&nbsp;</span>
    <span class="pad-left">{{event.location.city}},{{event.location.country}}</span>
  </div>
<button class="btn btn-primary" (click)="btnClicked()">Click Me</button>
</div>
`,
styles:[`.pad-left {margin-left:20px;}
.well div {color:#bbb;}
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
