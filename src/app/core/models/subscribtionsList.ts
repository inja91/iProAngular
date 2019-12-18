import { Subscriptions } from './subscriptions';


export class SubscriptionsList{
    subscriptions: Subscriptions[];

    constructor(obj?:any){
        this.subscriptions = obj && obj.subscriptions.map(elem => { return new Subscriptions(elem); }) || [];
    }
}