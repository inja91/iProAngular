import { Component, OnInit } from '@angular/core';
import { DisplayService } from './../../core/services/display/display.service';
import { OffersList } from 'src/app/core/models/offersList';
import { Offers } from 'src/app/core/models/offers';
import { Observable } from 'rxjs';

@Component({
  selector: 'ipro-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.scss']
})
export class OffersComponent implements OnInit {
  offersList: OffersList;
  flag: boolean;
  offers: Observable<Offers[]>;

  params = {
		sort: 'contractStartDate',
		sortDirection: 'desc'
  }

  columns = {
    'contractStartDate': true,
    'contractEndDate': true,
    'name': true
  }

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.refreshOffers();
  }

  ngOnDestroy() {}

  refreshOffers() {
    this.displayService.getAllOffers(this.params).subscribe(data => this.offers = data['offers']);
  }

  toggle(){
    this.flag = !this.flag
  }

  changeSortCriteria(criteria :string){
    if(this.params.sort == criteria) {

      if(this.params.sortDirection == 'desc') {
        this.params.sortDirection = "";
      } else {
        this.params.sortDirection = "desc"
      }

    } else {
      this.params.sort = criteria;
      this.params.sortDirection = "";
    }

		this.refreshOffers();
  }

}
