import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../services/shared.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  constructor(private _sharedService : SharedService) { }

  id_stock  : string  = '';
  op_name   : string  = '';
  op_market : string  = '';
  op_stkPrice : number;
  op_updateOn : Date;
  op_change : number;


  ngOnInit() {
  }

  getStockPrice(){
      this._sharedService.getStockDetail(this.id_stock)
            .subscribe(
              lstresult => {
                this.op_name = lstresult['dataset']['name'];
                this.op_market = lstresult['dataset']['database_code'];
                this.op_stkPrice = lstresult['dataset']['data'][0][4];
                this.op_updateOn = lstresult['dataset']['refreshed_at'];
                this.op_change = (lstresult['dataset']['data'][0][4] - lstresult['dataset']['data'][0][3]);
              },
              error => {
                console.log('Unable to get the stock price at this point of time because of the below error');
                console.log(error);
              }
            );
  }

}
