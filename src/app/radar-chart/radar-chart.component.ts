import { Component } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.css']
})

export class RadarChartComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Planificacion','Organizacion','Direccion','Coordinacion','Control'];

  public radarChartData: ChartDataSets[] = [
    { data: [0,1,2,3,4], label: ''}
  ];
  public radarChartType: ChartType = 'radar';

}
