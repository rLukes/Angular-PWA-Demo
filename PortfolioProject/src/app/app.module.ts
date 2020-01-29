import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faCodepen,
  faInstagram,
  faYoutube,
  faLinkedin,
  faMedium
} from "@fortawesome/free-brands-svg-icons";
import { AboutComponent } from './components/about/about.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
library.add(faGithub, faCodepen, faInstagram, faYoutube, faLinkedin, faMedium);

@NgModule({
  declarations: [AppComponent, AboutComponent, NavMenuComponent],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register("ngsw-worker.js", {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
