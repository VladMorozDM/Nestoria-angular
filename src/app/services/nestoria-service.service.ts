import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

export interface ISearchData {
  selectedCountry: string;
  cityName: string;
}

@Injectable()
export class NestoriaService {
  private items$: BehaviorSubject<any> = new BehaviorSubject([]);
  private latestResult: Array<any>;
  constructor( private http: HttpClient) {}
  private getBaseUrl(country: string ): string {
    switch ( country ) {
      case 'uk': return 'https://api.nestoria.co.' + country;
      case 'br': case 'au': return 'https://api.nestoria.com.' + country;
      default: return 'https://api.nestoria.' + country;
    }
  }

  public getLatestResult() {
    if( window.sessionStorage.getItem( 'latest') ) {
      return JSON.parse( window.sessionStorage.getItem( 'latest') );
    } else {
      return this.latestResult;
    }
  }
  public setLatestResult( result ) {
    result.subscribe( val => {
      this.latestResult = val;
      window.sessionStorage.setItem( 'latest', JSON.stringify(this.latestResult) );
    });
  }
  public get( searchParams: ISearchData ): Observable<any> {
    this.items$.next(this.http.jsonp( this.getBaseUrl(searchParams.selectedCountry)
        + '/api?encoding=json&pretty=1&action=search_listings&'
        + 'country=' + searchParams.selectedCountry
        + '&listing_type=buy&place_name='
        + searchParams.cityName
        , 'callback')
        .pipe(
                map( res => res.response.listings.map( item => {
                      item.id = `${item.latitude}${item.longitude}${item.price}`;
                      return item;
                    })
                )
        ));
    return this.items$;
  }
}
