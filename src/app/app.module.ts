import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClockModule } from './components/clock/clock.module';
import { LandingPageModule } from './components/landing-page/landing-page.module';
import { ClockDisplayModule } from './pipes/clock-display/clock-display.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingPageModule,
    ClockModule,
    HttpClientModule ,
    ClockDisplayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
