import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './links-display/education/education.component';
import { BenefitsComponent } from './links-display/benefits/benefits.component';
import { GamesComponent } from './links-display/games/games.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LinksDisplayComponent } from './links-display/links-display.component';
import { MessageComponent } from './message/message.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-router.module';
import { GalleryComponent } from './gallery/gallery.component';
import { BenRusComponent } from './links-display/ben-rus/ben-rus.component';
import { EducationRusComponent } from './links-display/education-rus/education-rus.component';
import { GamesRusComponent } from './links-display/games-rus/games-rus.component';
import { AboutusComponent } from './links-display/aboutus/aboutus.component';
import { AboutusRusComponent } from './links-display/aboutus-rus/aboutus-rus.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    BenefitsComponent,
    GamesComponent,
    ButtonsComponent,
    LinksDisplayComponent,
    MessageComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    BenRusComponent,
    EducationRusComponent,
    GamesRusComponent,
    AboutusComponent,
    AboutusRusComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
