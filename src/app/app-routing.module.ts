import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { GraficaComponent } from './grafica/grafica.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'line-chart' },

  { path: 'radar-chart', component: RadarChartComponent },
  { path: 'pie-chart', component: PieChartComponent },
  { path: 'graficas',component:GraficaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
