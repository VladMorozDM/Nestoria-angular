import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs/index';
import {map} from "rxjs/internal/operators";



@Injectable()
export class NestoriaService {
  private baseUtl = 'https://api.nestoria';
  constructor( private http: HttpClient) {}
  public get( searchParams: object ): Observable {
     return this.http.jsonp('https://api.nestoria.co.uk/'
      + 'api?encoding=json&pretty=1&action=search_listings&' + searchParams,
      'callback').pipe( map( res => res.response.listings ) );
  }
}
