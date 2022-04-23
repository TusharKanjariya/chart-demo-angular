import { Component } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.getDataSet();
  }
  title = 'chart-demo';

  // Your API Response Data is here
  data = [
    {
      "scac": "22AA",
      "tracking_id": "025B745101",
      "error": 4,
      "success": 10
    },
    {
      "scac": "MSCU",
      "tracking_id": "MEDUV5114412",
      "error": 5,
      "success": 84
    },
    {
      "scac": "OOLU",
      "tracking_id": "2132757680",
      "error": 8,
      "success": 1
    },
    {
      "scac": "MSCU",
      "tracking_id": "MEDUV5056837",
      "error": 10,
      "success": 5
    },
    {
      "scac": "MAEU",
      "tracking_id": "NBE22031079",
      "error": 12,
      "success": 0
    },
    {
      "scac": "OOLU",
      "tracking_id": "2690728420",
      "error": 5,
      "success": 131
    },
    {
      "scac": "MSCU",
      "tracking_id": "MEDU363IN1717930322",
      "error": 22,
      "success": 33
    }
  ]

  // For Bar Chart
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true
      }
    }
  };
  public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  // For Line Chart
  public lineChartOptions: ChartOptions = {
    responsive: true,
  };
  public lineChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public lineChartType: ChartType = 'line';
  public lineChartLegend = true;
  public lineChartPlugins = [];

  // Function : for getting Unique names for your chart Labels -- SCAC Unique Name as per your data
  getUniqueSCAC() {
    const unique = [...new Set(this.data.map(item => item.scac))];
    return unique;
  }

  getDataSet() {
    let uniqueSCAC = this.getUniqueSCAC();
    // For Showing Label in chart
    this.barChartLabels = uniqueSCAC;
    // Define temporary DataSet to perfrom Data Processing
    let tempDataSet: any = [
      {
        label: 'Success',
        data: [],
      },
      {
        label: 'error',
        data: [],
      },
    ];

    // Assigned success,Error rate value (Push all record succes,error value into tempDataSet DATA Field)
    this.data.forEach((entry) => {
      tempDataSet[0].data.push(entry.success);
      tempDataSet[1].data.push(entry.error);
    });

    // After Finalize data structure related to chart.js supports then assigned to main chart DataSet
    this.barChartData = tempDataSet;
    this.lineChartData = tempDataSet;
  }

  public barChartData = [];
  public lineChartData = [];
}
