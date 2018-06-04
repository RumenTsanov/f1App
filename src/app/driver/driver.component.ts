import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  drivers = [];
  driver: any;
  driverAvatar: any;
  driverId: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    this.route.params.subscribe( params => {
      this.driverId = params.id;
    } );
  }
  
  public avatars = [
    {
      imgUrl: 'assets/img/hamilton.png',
      code: 'HAM'
    },
    {
      imgUrl: 'assets/img/vettel.png',
      code: 'VET'
    },
    {
      imgUrl: 'assets/img/ricciardo.png',
      code: 'RIC'
    },
    {
      imgUrl: 'assets/img/bottas.png',
      code: 'BOT'
    },
    {
      imgUrl: 'assets/img/raikkonen.png',
      code: 'RAI'
    },
    {
      imgUrl: 'assets/img/max_verstappen.png',
      code: 'VER'
    },
    {
      imgUrl: 'assets/img/alonso.png',
      code: 'ALO'
    },
    {
      imgUrl: 'assets/img/hulkenberg.png',
      code: 'HUL'
    },
    {
      imgUrl: 'assets/img/sainz.png',
      code: 'SAI'
    },
    {
      imgUrl: 'assets/img/kevin_magnussen.png',
      code: 'MAG'
    },
    {
      imgUrl: 'assets/img/pic.png',
      code: 'GAS'
    },
    {
      imgUrl: 'assets/img/perez.png',
      code: 'PER'
    },
    {
      imgUrl: 'assets/img/ocon.png',
      code: 'OCO'
    },
    {
      imgUrl: 'assets/img/vandoorne.png',
      code: 'VAN'
    },
    {
      imgUrl: 'assets/img/pic.png',
      code: 'STR'
    },
    {
      imgUrl: 'assets/img/ericsson.png',
      code: 'ERI'
    },
    {
      imgUrl: 'assets/img/pic.png',
      code: 'HAR'
    },
    {
      imgUrl: 'assets/img/grosjean.png',
      code: 'GRO'
    },
    {
      imgUrl: 'assets/img/pic.png',
      code: 'SIR'
    },
    {
      imgUrl: 'assets/img/pic.png',
      code: 'LEC'
    }
  ];

  ngOnInit() {
    this.setDriver();
  }

setDriver(){
  this.http.get('http://ergast.com/api/f1/2018/driverStandings.json').subscribe(data =>{
      this.drivers = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      for(let i = 0; i < this.drivers.length; i++){
        if(this.drivers[i].Driver.driverId == this.driverId){
          this.driver = this.drivers[i].Driver;
        }
      }
      for(let j = 0; j < this.avatars.length; j++){
        if(this.driver.code == this.avatars[j].code){
          this.driverAvatar = this.avatars[j].imgUrl;
        }
      }
    });
}

}
