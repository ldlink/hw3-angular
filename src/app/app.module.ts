import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ElementTemperatureComponent } from './element-temperature/element-temperature.component';
import { ElementAboutComponent } from './element-about/element-about.component';
import { HotelFilterPipe } from './hotel-filter.pipe';
import { ShowRatePipe } from './show-rate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementTemperatureComponent,
    ElementAboutComponent,
    HotelFilterPipe,
    ShowRatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
