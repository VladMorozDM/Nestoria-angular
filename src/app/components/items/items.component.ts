import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor( private nestoria: NestoriaService ) { }
  private items: Observable;
  // private setItems( newItems ) {
  //   this.items.splice(0);
  //   this.items.push(newItems);
  // }
  ngOnInit() {
  //  this.nestoria.get('country=uk&listing_type=buy&place_name=brighton').subscribe( _ => this.setItems(_) );
    this.items = this.nestoria.get('country=uk&listing_type=buy&place_name=brighton');
    this.items.subscribe( val => console.log(val) )
  }
}
