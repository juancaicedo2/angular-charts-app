import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

import { ChartsModule } from 'ng2-charts';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    AppComponent,
    RadarChartComponent,
    PieChartComponent,
    GraficaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
