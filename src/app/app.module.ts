import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { ElementTemperatureComponent } from './element-temperature/element-temperature.component';
import { ElementAboutComponent } from './element-about/element-about.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    ElementTemperatureComponent,
    ElementAboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
