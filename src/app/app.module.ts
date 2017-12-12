import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieFormComponent } from './movie-form/movie-form.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HighlighterDirective } from './directives/Highlight-directive';


@NgModule({
  declarations: [
    AppComponent,
    MovieFormComponent,
    MovieListComponent,
    HighlighterDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
