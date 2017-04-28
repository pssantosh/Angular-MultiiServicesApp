import { RouterModule, Routes } from '@angular/router';
import { BookComponent }         from './book/book.component';
import { CurrencyComponent }    from './currency/currency.component';
import { MovieComponent }       from './movie/movie.component';
import { StockComponent }       from './stock/stock.component';
import { WeatherComponent }     from './weather/weather.component';
import { FeedbackComponent }    from "./feedback/feedback.component";

const MAINMENU_ROUTES : Routes = [
    { path: '', redirectTo: '/weather', pathMatch: 'full' },
    { path: 'book', component: BookComponent },
    { path: 'currency', component: CurrencyComponent },
    { path: 'movie', component: MovieComponent },
    { path: 'stock', component: StockComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'feedback', component: FeedbackComponent }
];

export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);