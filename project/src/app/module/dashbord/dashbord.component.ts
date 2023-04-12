import { Component } from '@angular/core';
import { DashbordService } from '../dashbord.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  bigChart = [{}];
  cards=[0];
  dataTable=[{}];
  constructor(private dashbordService:DashbordService) {


   }

   ngOnInit(){

    this.bigChart = this.dashbordService.bigChart();
    this.cards = this.dashbordService.cards();
    this.dataTable = this.dashbordService.dataTable();


  }


}
