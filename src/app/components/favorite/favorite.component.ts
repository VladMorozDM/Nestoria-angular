import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-favotite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(  private location: Location ) { }

  onClick() {
    this.location.back();
    console.log( 'asf' );
  }
  ngOnInit() {
  }

}
