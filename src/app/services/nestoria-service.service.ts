import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FavService } from './fav.service';
import { UrlService } from './url.service';
import { ISearchData } from '../models/Isearch-data';
import {Item} from '../models/Item';



@Injectable()
export class NestoriaService {
  private items$: BehaviorSubject<any> = new BehaviorSubject([]);
  private searchParams: ISearchData = { selectedCountry: 'uk', cityName: 'brighton' };
  constructor( private http: HttpClient,
               private route: Router,
               private favorite: FavService,
               private url: UrlService
  ) {}

  public getLatestResult() {
    return of(JSON.parse( window.sessionStorage.getItem( 'latest' )) );
  }
  public get( searchParams: ISearchData = this.searchParams ): BehaviorSubject<Item[]> {
    this.searchParams = searchParams;
    if ( this.route.url === '/favorite' ) {
      this.items$.next( of(this.favorite.getFavoriteItems()) );
    } else {
      this.items$.next( this.http.jsonp( this.url.getUrl( searchParams ), 'callback')
        .pipe(
            map(
              res => {
                const result =  res.response.listings.map( item => {
                  item.id = `${item.latitude}${item.longitude}${item.price}`;
                  return new Item( item );
                });
                window.sessionStorage.setItem( 'latest', JSON.stringify( result ) );
                return result;
              }
            )
        )
      );
    }
    return this.items$;
  }
}
