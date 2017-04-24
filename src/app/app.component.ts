import { Component } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  private noOfSvcCalls;
  constructor(private _sharedServices : SharedService) { }
  
  ngOnInit() {
    this.noOfSvcCalls = this._sharedServices.totReqsMade;
  }
}
