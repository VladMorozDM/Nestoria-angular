import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() data: object;
  constructor( private router: Router) { }

  showDetails() {
    this.router.navigate( ['/item', this.data['id']] );
  }
  ngOnInit() {
  }

}
