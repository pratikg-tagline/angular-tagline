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
import { OurglobalComponent } from './ourglobal/ourglobal.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SectionComponent } from './section/section.component';
import { FooterhrComponent } from './footerhr/footerhr.component';
import { FootehelpComponent } from './footehelp/footehelp.component';
import { FootservicesComponent } from './footservices/footservices.component';
import { FoothiredevlopersComponent } from './foothiredevlopers/foothiredevlopers.component';
import { FootlastlineComponent } from './footlastline/footlastline.component';
import { WordsclientComponent } from './wordsclient/wordsclient.component';
import { AwardsComponent } from './awards/awards.component';

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
    OurblogsComponent,
    OurglobalComponent,
    FooterComponent,
    NavbarComponent,
    SectionComponent,
    FooterhrComponent,
    FootehelpComponent,
    FootservicesComponent,
    FoothiredevlopersComponent,
    FootlastlineComponent,
    WordsclientComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
