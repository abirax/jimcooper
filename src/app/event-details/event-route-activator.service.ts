import { Injectable  } from "@angular/core";
import{Route, ActivatedRouteSnapshot, Router} from "@angular/router";
import { CanActivate } from "@angular/router";
import { EventService } from "../shared/event-service.component";
@Injectable()
export class EventRouterActivatorService implements CanActivate{

    /**
     *
     */
    constructor(private eventService:EventService,private routerService:Router) {
              
    }
    canActivate(route: ActivatedRouteSnapshot )
    {
     console.log("inside activator");
        const eventexists =!!this.eventService.getEvent(+route.params['id']);
      //console.log(eventexists);
      if(!eventexists)
      {
          this.routerService.navigate(['/404']);

      }
      else
      return eventexists;
    }
}