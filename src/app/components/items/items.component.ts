import { Component, OnInit, OnDestroy } from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';
import { Observable, Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {

  constructor( private nestoria: NestoriaService ) { }
  private unsubscriber$: Subject<any> = new Subject();
  private items$: Observable<any[]>;
  ngOnInit() {
    this.nestoria.get().pipe( takeUntil(this.unsubscriber$) )
      .subscribe( val => {
        this.items$ = val;
      });
  }
  ngOnDestroy() {
    this.unsubscriber$.next(0);
  }
}
