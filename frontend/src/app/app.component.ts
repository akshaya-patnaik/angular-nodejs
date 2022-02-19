import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ExportService } from './shared/export-service/export.service';
import { IUser, UserService } from './shared/user-service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  public columnList = [
    'userId',
    'appName',
    'lastLoginDate',
    'lastDataLoad',
    'email',
    'salesProfit',
    'itemQty',
    'amount'
  ];

  public dataSource = new BehaviorSubject<IUser[]>([]);

  constructor(
    private exportService: ExportService,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(): void {
    this.userService.getUserList()
      .subscribe((res: IUser[]) => {
        this.dataSource.next(res);
      });
  }

  getRowList() {
    return this.dataSource.value;
  }

  getHeaderList() {
    return this.columnList;
  }

  downloadAsExcel(): void {
    const rowList = this.getRowList();
    const headerList = this.getHeaderList();

    const csvData = this.exportService.convertToCsv(rowList, headerList);

    const csvBlob = new Blob([ csvData ], { type: 'text/csv' });
    const objectUrl = URL.createObjectURL(csvBlob);
    const link: any = document.createElement('a');

    link.download = 'user_list.csv';
    link.href = objectUrl;
    link.click();
  }

}
