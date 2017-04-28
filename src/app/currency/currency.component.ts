import { Component, OnInit } from '@angular/core';
import { SharedService } from "./../services/shared.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  
  id_currency: string = "";
  my_result: any;

  constructor(private _sharedService : SharedService) { }

  ngOnInit() {
  }

  callCurrencyService(){
    this._sharedService.getCurrencyExchRate(this.id_currency)
          .subscribe(
            lstresult => {
              this.my_result = JSON.stringify(lstresult);
            },
            error => {
              console.log('unable to get the exchange information as the server returned the below error');
              console.log(error);
            }             
          );
  }

}
