import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})


export class ChartComponent implements OnInit {

  @Input() data: number[] = [];
  @Input () labels: string[]=[];


  ngOnInit(): void {
    console.log(`input passed: ${this.data}`);
    this.barChartData =  [
      { data: this.data, label: 'Endpoint Status' }
    ];
    this.barChartLabels =this.labels;

  }

  title = 'bar-chart';
  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,

  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = false;
  barChartPlugins:any = {'backgroundColor': [
    "#FF6384",
    "#4BC0C0",
    "#FFCE56",
    "#E7E9ED",
    "#36A2EB"
 ]}
 public barChartColors: Color[] = [
  { backgroundColor: 'green' },
]

  barChartData: ChartDataSets[] = [];
 }
