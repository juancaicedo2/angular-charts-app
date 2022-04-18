import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType, RadialChartOptions } from 'chart.js';

import { Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent  {

  constructor() { 
     monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();}

  
    public pieChartOptions: ChartOptions = {
      responsive: true,
    };
    public pieChartLabels: Label[] = [['Planificacion'], ['Organizacion'], ['Direccion'],['Coordinacion'],['Control']];
    public pieChartData: SingleDataSet = [20, 20, 20,25,15];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    public radarChartOptions: RadialChartOptions = {
      responsive: true,    
      
    };
    
    public radarChartLabels: Label[] = ['Planificacion','Organizacion','Direccion','Coordinacion','Control'];
  
    public radarChartData: ChartDataSets[] = [
      {  label: 'Diagnostico Administrativo',
         data: [5,5,1,3,4],
         fill:true},
      
    ];
    public radarChartType: ChartType = 'radar';
  
  }
  


