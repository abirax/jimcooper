import {Routes} from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";
import { Error404Component } from "./errors/404.component";
import { CarDetailsComponent } from "./carpage/car-details.component";
import { EventRouterActivatorService } from "./event-details/event-route-activator.service";

export const appRoutes:Routes = [
    {
        path: 'events', component: EventListComponent
    },
    {path:'events/new',component:CreateEventComponent},
    { path: 'events/:id', component: EventDetailsComponent,canActivate: [EventRouterActivatorService] },
    { path: '404', component: Error404Component },
    { path: 'cars', component: CarDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'events' }


    
]