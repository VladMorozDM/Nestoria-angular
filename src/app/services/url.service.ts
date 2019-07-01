import { Injectable } from '@angular/core';
import { ISearchData } from '../models/Isearch-data';

@Injectable()
export class UrlService {
  constructor() { }
  private getBaseUrl(country: string ): string {
    switch ( country ) {
      case 'uk': return 'https://api.nestoria.co.' + country;
      case 'br': case 'au': return 'https://api.nestoria.com.' + country;
      default: return 'https://api.nestoria.' + country;
    }
  }
  public getUrl( searchParams: ISearchData ) {
    return this.getBaseUrl( searchParams.selectedCountry )
            + '/api?encoding=json&pretty=1&action=search_listings&'
            + 'country=' + searchParams.selectedCountry
            + '&listing_type=buy&place_name='
            + searchParams.cityName;
  }
}
