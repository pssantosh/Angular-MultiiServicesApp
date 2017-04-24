import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from './services/shared.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { WeatherComponent } from './weather/weather.component';
import { MovieComponent } from './movie/movie.component';
import { CurrencyComponent } from './currency/currency.component';
import { StockComponent } from './stock/stock.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    WeatherComponent,
    MovieComponent,
    CurrencyComponent,
    StockComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CONST_ROUTING
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
