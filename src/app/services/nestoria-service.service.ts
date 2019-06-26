import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs/index';
import {map} from "rxjs/internal/operators";

export interface ISearchData{
  selectedCountry: string;
  cityName: string;
}

@Injectable()
export class NestoriaService {
  private baseUtl = 'https://api.nestoria';
  private items$: BehaviorSubject = new BehaviorSubject([]);
  constructor( private http: HttpClient) {}
  private getBaseUrl(country: string ): string{
    switch( country ){
      case 'uk': return 'https://api.nestoria.co.' + country;
      case 'br': case 'au': return 'https://api.nestoria.com.'+country;
      default: return 'https://api.nestoria.' + country;
    }
  }
  public get( searchParams: ISearchData ): Observable {
    this.items$.next(this.http.jsonp( this.getBaseUrl(searchParams.selectedCountry)
      + '/api?encoding=json&pretty=1&action=search_listings&'
      + 'country=' + searchParams.selectedCountry
      + '&listing_type=buy&place_name='
      + searchParams.cityName
      , 'callback').pipe( map( res => res.response.listings ) ));
    return this.items$;
  }
}
