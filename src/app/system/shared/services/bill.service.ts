import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Bill } from '../models/bill.model';

@Injectable()
export class BillService{
    constructor(private http: Http){}

    getBill(): Observable<Bill> {
        return this.http.get('http://localhost:3000/bill')
            .map((response: Response) => response.json());
    }

    getCurrency(base: string = 'RUB'): Observable<any> {
        return this.http.get(`https://api.fixer.io/latest?base=${base}`)
            .map((response: Response) => response.json());
    }
}