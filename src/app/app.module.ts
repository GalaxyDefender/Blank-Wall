import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
// import 'test.css';
import { HomeComponent } from './home/home.component';
import { CuratorsChoiceComponent } from './home/curators-choice/curators-choice.component';
import { FeaturedArtistComponent } from './home/featured-artist/featured-artist.component';
import { AffordableDesignsComponent } from './home/affordable-designs/affordable-designs.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    CuratorsChoiceComponent,
    FeaturedArtistComponent,
    AffordableDesignsComponent,
    FooterComponent,
    DropdownDirective,
    ArtistsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }