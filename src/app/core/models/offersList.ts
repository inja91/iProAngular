import {Offers} from '../models/offers'


export class OffersList{
    offers: Offers[];

    constructor(obj?:any){
        this.offers = obj && obj.offers.map(elem => { return new Offers(elem); }) || [];
    }
}