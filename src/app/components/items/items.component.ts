import { Component, OnInit, OnDestroy } from '@angular/core';
import { NestoriaService } from '../../services/nestoria-service.service';
import { Observable, Subject } from 'rxjs/index';
import { takeUntil } from 'rxjs/internal/operators';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit, OnDestroy {

  constructor( private nestoria: NestoriaService ) { }
  private unsubscriber: Subject<any> = new Subject();
  private items = [];
  ngOnInit() {
    this.nestoria.get({ selectedCountry: 'uk', cityName: 'brighton' })
      .pipe(
        takeUntil(this.unsubscriber)
      )
      .subscribe( val => {
          this.items = val;
          this.nestoria.setLatestResult( val );
      });
  }
  ngOnDestroy() {
    this.unsubscriber.next(0);
  }
}
