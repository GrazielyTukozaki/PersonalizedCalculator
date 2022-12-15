import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CalculatorPageComponent } from './calculator-page/calculator-page.component';
import { CalculatorComponent } from './calculator-page/calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CalculatorPageComponent,
    CalculatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
