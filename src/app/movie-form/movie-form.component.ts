import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// import { DateFunction } from '../Date-Data';

import { IMovieModel } from '../model/MovieModel';
import { MovieService } from '../services/Movie-Service';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { UnhandledAlertError } from 'selenium-webdriver';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
  providers: [MovieService]
})
export class MovieFormComponent implements OnInit {

  moviesModel: IMovieModel;
  moviesList: IMovieModel[] = [];
  movieDetail: IMovieModel;
  private _Description: string;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
  this.movieModel();
  this.moviesList = this._movieService.getMovieList();
  }

  movieModel() {
    /* Define Default values */
    return this.moviesModel = {
      MovieName: '',
      Rating: '',
      Date_Of_Release: '',
      Description: ''
    };
  }

  /* Add a Movie */
  addMovies(values) {
    console.log(values.Description);
    if (values.Description === '' || values.Description === undefined ) {
      this._Description = 'N/A';
     } else {
    this._Description = values.Description;
    }
    this.moviesModel = {
      MovieName: values.MovieName,
      Rating: values.Rating,
      Date_Of_Release: values.Date_Of_Release,
      Description: this._Description
    };
    this._movieService.addMovie(this.moviesModel);
    this._movieService.getMovieList();
    console.log(this.moviesList);
    this.moviesModel = new IMovieModel();
  }
}
