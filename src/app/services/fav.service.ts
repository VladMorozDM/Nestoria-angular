import { Injectable } from '@angular/core';
import { Item } from '../models/Item';

@Injectable()
export class FavService {
  private items: Item[] = [];
  constructor() { }
  addItem( item: Item ) {
    console.log('add');
    this.items.push( item );
  }
  deleteItem( itemId: string ) {
    console.log('delete');
    this.items = this.items.filter( item => itemId !== item.id );
  }
  check( itemId: string ): boolean {
    const checkedList = this.items.filter( item => itemId === item.id );
    return !!checkedList.length;
  }
  public getFavoriteItems(): Item[] {
    return this.items;
  }
}
