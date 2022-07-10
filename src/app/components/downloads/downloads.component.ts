import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import * as dfd from '../../../assets/json/download_handler.json';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  download:any;
  AllDeviceData:any;
  constructor() { }

  ngOnInit(): void {
    let defed = dfd;
    this.download = defed.data;
    this.AllDeviceData = [];
    this.getalldata();
    console.log(this.AllDeviceData);
  }

  getalldata(){
    this.download.forEach((e:any,index:number) => {
        axios.get(e.ota_json).then((res)=>{
          // console.log(res.data.response[0]);
          this.AllDeviceData.push(res.data.response[0]);
        })
      });
  }

}
