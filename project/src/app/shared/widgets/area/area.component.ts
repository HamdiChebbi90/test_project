import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from "highcharts/modules/exporting";


@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent {

  Highcharts = Highcharts;
  chartOptions = {};
  @Input () data: any;



  ngOnInit() {


    this.chartOptions = {
      chart: {
        type: 'area'
      },
      title: {
        text: 'Users'
      },
      subtitle: {
        text: 'demo'
      },
      tooltip: {
        split: true,
        valueSuffix: ' millions'
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: true
      },

      series:  this.data

      // series: [{
      //   name: 'Tokyo',
      //   data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2]
      // }, {
      //   name: 'New York',
      //   data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
      // }, {
      //   name: 'London',
      //   data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0]
      // }]
    };
    HC_exporting(this.Highcharts);

    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }
      , 300);











  }










}


