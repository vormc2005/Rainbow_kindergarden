import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EducationComponent } from './links-display/education/education.component';
import { BenefitsComponent } from './links-display/benefits/benefits.component';
import { GamesComponent } from './links-display/games/games.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { LinksDisplayComponent } from './links-display/links-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducationComponent,
    BenefitsComponent,
    GamesComponent,
    ButtonsComponent,
    LinksDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
