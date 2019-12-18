import { Subscriptions } from './../../core/models/subscriptions';
import { Component, OnInit } from '@angular/core';
import { DisplayService } from './../../core/services/display/display.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ipro-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})
export class SubscriptionsComponent implements OnInit {
  subscriptions: Observable<Subscriptions[]>;

  constructor(private displayService: DisplayService) { }

  ngOnInit() {
    this.refreshSubscriptions();
  }

  refreshSubscriptions() {
    this.displayService.getAllSubscriptions().subscribe(data => this.subscriptions = data['subscriptions']);
  }

}
