import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ConstantService } from '../constant/constant.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private constantService: ConstantService
  ) {
  }

  getUserList(): Observable<any> {
    // return this.http.get('http://localhost:3000/user')
    return this.http.get(this.constantService
      .getUrl(`${this.constantService.USER}`));
  }

}

export interface IUser {
  userId: number;
  appName: string;
  lastLoginDate: string;
  lastDataLoad: string;
  email: string;
  salesProfit: number;
  itemQty: number;
  amount: number;
}
