import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Offers } from './../../models/offers';
import { Subscriptions } from './../../models/subscriptions';
import { OffersList } from '../../models/offersList';
import { SubscriptionsList } from '../../models/subscribtionsList';

const offersurl = "https://selfcare-service.demo.melita.com/interview/api/offers"
const subscriptionsurl = "https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions"

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(private http: HttpClient) { }

  getAllOffers(params? :any): Observable<any> {
    let queryParams = {};
    if(params){
      queryParams = {params : new HttpParams()
        .set('sort', params.sort || "")
        .set('sortDirection', params.sortDirection || "")
      }
    }

    return this.http.get(offersurl, queryParams);
  }

  getAllSubscriptions(params? :any): Observable<any> {
    let queryParams = {};
    if(params){
      queryParams = {params : new HttpParams()
        .set('sort', params.sort || "")
        .set('sortDirection', params.sortDirection || "")
      }
    }

    return this.http.get(subscriptionsurl, queryParams);
  }
}
