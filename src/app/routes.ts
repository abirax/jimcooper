import {Routes} from "@angular/router";
import { EventListComponent } from "./event-list/event-list.component";
import { EventDetailsComponent } from "./event-details/event-details.component";
import { CreateEventComponent } from "./events/create-event.component";

export const appRoutes:Routes = [
    {
        path: 'events', component: EventListComponent
    },
    {path:'events/new',component:CreateEventComponent},
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', pathMatch: 'full', redirectTo: 'events' }
    
]