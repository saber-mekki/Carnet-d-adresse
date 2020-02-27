import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarnetComponent } from './carnet/carnet.component';
import { AdressComponent } from './adress/adress.component';

@NgModule({
  declarations: [
    AppComponent,
    CarnetComponent,
    AdressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
