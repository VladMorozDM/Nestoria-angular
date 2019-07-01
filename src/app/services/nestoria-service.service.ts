import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FavService } from './fav.service';

export interface ISearchData {
  selectedCountry: string;
  cityName: string;
}

@Injectable()
export class NestoriaService {
  private favItems: Observable<object[]> = of([
    { title: 'Some', price_formatted: '400', keywords: 'lol, kek, lmao' },
    { title: 'Some', price_formatted: '400', keywords: 'lol, kek, lmao' },
    { title: 'Some', price_formatted: '400', keywords: 'lol, kek, lmao' }
  ]);
  private items$: BehaviorSubject<any> = new BehaviorSubject([]);
  private searchParams: ISearchData = { selectedCountry: 'uk', cityName: 'brighton' };
  constructor( private http: HttpClient,
               private route: Router,
               private favorite: FavService
  ) {}
  private getBaseUrl(country: string ): string {
    switch ( country ) {
      case 'uk': return 'https://api.nestoria.co.' + country;
      case 'br': case 'au': return 'https://api.nestoria.com.' + country;
      default: return 'https://api.nestoria.' + country;
    }
  }
  public getLatestResult() {
    return of(JSON.parse( window.sessionStorage.getItem( 'latest' )) );
  }
  public get( searchParams: ISearchData = this.searchParams ): Observable<any> {
    this.searchParams = searchParams;
    if ( this.route.url === '/favorite' ) {
      this.items$.next( this.favItems );
    } else {
      this.items$.next( this.http.jsonp( this.getBaseUrl(searchParams.selectedCountry)
        + '/api?encoding=json&pretty=1&action=search_listings&'
        + 'country=' + searchParams.selectedCountry
        + '&listing_type=buy&place_name='
        + searchParams.cityName
        , 'callback'
      ).pipe(
        map(
          res => {
            const result =  res.response.listings.map( item => {
              item.id = `${item.latitude}${item.longitude}${item.price}`;
              return item;
            });
            window.sessionStorage.setItem( 'latest', JSON.stringify( result ) );
            return result;
          }
        )
      ));
    }
    return this.items$;
  }
}
