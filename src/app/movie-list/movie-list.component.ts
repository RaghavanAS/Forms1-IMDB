import { Component, OnInit, Input } from '@angular/core';
import { IMovieModel } from '../model/MovieModel';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movieDetail: IMovieModel[];
  @Input() color: string;
  constructor() {
    this.color = 'black';
   }

  ngOnInit() {
  }

}
