import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';


@Component({
  selector: 'app-rent-list',
  templateUrl: './rent-list.component.html',
  styleUrls: ['./rent-list.component.scss']
})
export class RentListComponent implements OnInit {

  constructor( private nestoria: NestoriaService ) { }
  private items = [];
  private setItems( newItems ) {
    this.items.splice(0);
    this.items.push(newItems);
  }
  ngOnInit() {
    this.nestoria.get('country=uk&listing_type=buy&place_name=brighton').subscribe( _ => this.setItems(_) );
    document.addEventListener('click', () => console.log(this.items) );
  }
}
