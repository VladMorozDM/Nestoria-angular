import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';
import {Observable} from 'rxjs/index';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor( private nestoria: NestoriaService ) { }
  private items;
  // private setItems( newItems ) {
  //   this.items.splice(0);
  //   this.items.push(newItems);
  // }
  ngOnInit() {
  //  this.nestoria.get('country=uk&listing_type=buy&place_name=brighton').subscribe( _ => this.setItems(_) );
    this.nestoria.get({ selectedCountry: 'uk', cityName: 'brighton' }).subscribe( val => {
      this.items = val;
    });

  }
}
