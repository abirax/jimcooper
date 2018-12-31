import { Component} from '@angular/core';
import { Router } from '@angular/router';
@Component({
    template:`
    <h1> New Event</h1>
    <hr>
    <div>
    <br>
    <h2> New Events details will go here!</h2>
    <br>
    <button class="btn btn-primary"> Save</button>
    <button class="btn btn-secondary" (click)="cancel()"> Cancel </button>
    </div>
    `
})
export class CreateEventComponent{
    constructor(private route:Router)
    {}
    cancel()
    {
        this.route.navigate(['\events']);
        console.log("cancelled","new event");
    }
}