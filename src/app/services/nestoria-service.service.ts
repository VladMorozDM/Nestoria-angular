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
  public get( searchParams: ISearchData ): Observable {
    this.items$.next(this.http.jsonp('https://api.nestoria.co.uk/'
      + 'api?encoding=json&pretty=1&action=search_listings&'
      + 'country='+ searchParams.selectedCountry
      + '&listing_type=buy&place_name='
      + searchParams.cityName
      , 'callback').pipe( map( res => res.response.listings ) ));
    return this.items$;
  }
}
