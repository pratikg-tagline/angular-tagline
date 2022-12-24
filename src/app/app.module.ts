import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { ExperienceComponent } from './experience/experience.component';
import { BackendComponent } from './backend/backend.component';
import { FrontendComponent } from './frontend/frontend.component';
import { TechnologyComponent } from './technology/technology.component';
import { WhyTeglineComponent } from './why-tegline/why-tegline.component';
import { ReviewComponent } from './review/review.component';
import { OurblogsComponent } from './ourblogs/ourblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    ExperienceComponent,
    BackendComponent,
    FrontendComponent,
    TechnologyComponent,
    WhyTeglineComponent,
    ReviewComponent,
    OurblogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
