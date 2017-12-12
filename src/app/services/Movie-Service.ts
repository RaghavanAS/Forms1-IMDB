import { Injectable } from '@angular/core';
import { DateFunction } from '../Date-Data';
import { IMovieModel } from '../model/MovieModel';

@Injectable()
export class MovieService {

  private MoviesList: IMovieModel[] = [];

  /** Add movie in the array List. */
  addMovie(movieDetail: IMovieModel) {
    this.MoviesList.unshift(movieDetail);
  }

  /**Get the movie list from the array. */
  getMovieList(): IMovieModel[] {
    return this.MoviesList;
  }
}
