import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() {
  }

  convertToCsv(rowList: any[], headerList: string[]) {
    let str = '';
    let row = 'sl. no., ';

    row += headerList.join(', '); // generates header row
    str += row + '\r\n';

    for (let i = 0; i < rowList.length; i++) {
      let line = (i + 1).toString();

      for (const index in headerList) {
        if (index) {
          const header = headerList[index];
          line += ', ' + rowList[i][header]; // generates rows line by line for the excel
        }
      }

      str += line + '\r\n';
    }

    return str;
  }

}
