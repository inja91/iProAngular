export class Offers{
    id: number;
    name: string;
    contractEndDate: string;
    contractStartDate: string;

    constructor(obj?:any) {
        this.id= obj && obj.id || null;
        this.name= obj && obj.name || ""
        this.contractEndDate= obj && obj.contractEndDate || ""
        this.contractStartDate= obj && obj.contractStartDate || ""
    }
}