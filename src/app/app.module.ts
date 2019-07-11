import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementListComponent } from './element-list/element-list.component';
import { ElementTemperatureComponent } from './element-temperature/element-temperature.component';
import { ElementAboutComponent } from './element-about/element-about.component';
import { HotelFilterPipe } from './element-list/hotel-filter.pipe';
import { ShowRatePipe } from './element-list/show-rate.pipe';
import { HotelListService } from './services/hotel-list.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HotelComponent } from './element-list/hotel/hotel.component';
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementListComponent,
    ElementTemperatureComponent,
    ElementAboutComponent,
    HotelFilterPipe,
    ShowRatePipe,
    HotelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    HotelListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
