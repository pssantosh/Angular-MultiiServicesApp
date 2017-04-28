import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../services/shared.service";

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
                this.op_name = lstresult[0]["t"];
                this.op_market = lstresult[0]["e"];
                this.op_stkPrice = lstresult[0]["l"];
                this.op_updateOn = lstresult[0]["lt"];
                this.op_change = lstresult[0]["c"];
              },
              error => {
                console.log('Unable to get the stock price at this point of time because of the below error');
                console.log(error);
              }
            );
  }

}
