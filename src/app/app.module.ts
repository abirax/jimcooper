import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventService } from './shared/event-service.component';
import { ToasterService } from './common/toaster.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService,ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
