import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { FavService } from '../../../services/fav.service';
import { Item } from '../../../models/Item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  isFavorite: boolean;
  @Input() data: Item;
  constructor( private router: Router, private favorite: FavService ) { }

  showDetails() {
    this.router.navigate( ['/item', this.data['id']] );
  }
  onAdd(){
    this.favorite.addItem( this.data );
    this.isFavorite = !this.isFavorite;
  }
  onRemove() {
    this.favorite.deleteItem( this.data.id );
    this.isFavorite = !this.isFavorite;
  }
  ngOnInit() {
    this.isFavorite = this.favorite.check(this.data.id);
  }

}
