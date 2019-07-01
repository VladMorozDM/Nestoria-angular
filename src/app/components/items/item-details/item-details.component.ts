import {Component, OnDestroy, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { NestoriaService } from '../../../services/nestoria-service.service';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs/internal/operators';
import { Subject } from 'rxjs/index';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  private unsubscriber$: Subject<any> = new Subject();
  private data: object;
  constructor( private nestoria: NestoriaService, private route: ActivatedRoute, private location: Location ) { }
  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nestoria.getLatestResult().pipe(
      takeUntil(this.unsubscriber$)
    ).subscribe(
      items => items.forEach( item => {
        if ( item.id === id ) {
          this.data = item;
        }
      } )
    );
  }
  onClick() {
    this.location.back();
  }
  ngOnDestroy() {
    this.unsubscriber$.next(0);
  }
}
