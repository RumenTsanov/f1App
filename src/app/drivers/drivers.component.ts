import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})

export class DriversComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDrivers();
  }

  public drivers = [];

    
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

  getDrivers(){
    let drvs = [];
    this.http.get('http://ergast.com/api/f1/2018/driverStandings.json').subscribe(data =>{
      drvs = data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      for(let i = 0; i < drvs.length; i++){
        let frName = drvs[i].Driver.givenName;
        let lsName = drvs[i].Driver.familyName;
        let driverId = drvs[i].Driver.driverId;
        let nationality = drvs[i].Driver.nationality;
        let position = drvs[i].position;
        let points = drvs[i].points;
        let wins = drvs[i].wins;
        let constructor = drvs[i].Constructors[0].name;

        for(let j = 0; j < this.avatars.length; j++){
          if(drvs[i].Driver.code == this.avatars[j].code){
            this.drivers.push({
              'fName': frName,
              'lName': lsName,
              'nationality': nationality,
              'avtr': this.avatars[j].imgUrl,
              'position': position,
              'points': points,
              'wins': wins,
              'constructor': constructor,
              'driverId': driverId
            });
          }
        }
        
      }
    });
  }

}
