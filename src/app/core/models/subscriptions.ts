export class Subscriptions{
    id: number;
    name: string;
    type: string;

    constructor(obj?:any){
        this.id= obj && obj.id || null;
        this.name= obj && obj.name || ""
        this.type= obj && obj.type || ""
    }
}