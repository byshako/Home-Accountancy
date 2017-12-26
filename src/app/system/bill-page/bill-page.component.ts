import {Component, OnInit, OnDestroy} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'hb-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy{
  sub1: Subscription;
  sub2: Subscription;

  currency: any;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.sub1 = Observable.combineLatest(
        this.billService.getBill(),
        this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
    });
  }

  onRefresh() {
    this.isLoaded = false;
    this.billService.getCurrency()
        .delay(1000)
        .subscribe((currency: any) => {
          this.currency = currency;
          this.isLoaded = true;
        });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
    if (this.sub2) {
      this.sub2.unsubscribe();
    }
  }
}
