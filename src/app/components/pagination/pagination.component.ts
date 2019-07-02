import {Component, Input, OnInit} from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';

export class Page {
  constructor() {}
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  pages: any[];
  constructor( private nestoria: NestoriaService ) { }
  onClick( index: number ) {
    this.nestoria.get( { pageNumber: index } );
  }
  ngOnInit() {
    this.pages = this.nestoria.getPages();
  }

}
