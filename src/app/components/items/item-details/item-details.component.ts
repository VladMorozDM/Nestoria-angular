import { Component, OnInit } from '@angular/core';
import { NestoriaService } from '../../../services/nestoria-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
  private data: object;
  constructor( private nestoria: NestoriaService, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nestoria.getLatestResult().forEach( item => {
          if ( item.id === id ) {
            this.data = item;
          }
    });
  }
}