import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from "highcharts/modules/exporting";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {


  @Input() label: string | undefined;
  @Input() total: string | undefined;
  @Input() percentage: string | undefined;

  @Input() data: any;

  Highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit() {




    this.chartOptions = {
      chart: {
        type: 'area',
        backgroundColor: 'transparent',
        borderWidth: 0,
        margin: [2, 2, 2, 2],

      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      tooltip: {
        split: true,
        outside: true
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      },
      legend: {
        enabled: true
      },
      xAxis: {

        labels: {
          enabled: false
        },
        title: {
          text: null
        },
        startOnTick: false,
        endOnTick: false,
        tickOptions: []
            },

      yAxis: {

              labels: {
                enabled: false
              },
              title: {
                text: null
              },
              startOnTick: false,
              endOnTick: false,
              tickOptions: []
                  },



      series: [{
        // data: [80, 90, 100, 110, 60,40]
        data: this.data

      }
      ]
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
