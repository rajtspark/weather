import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';
import { HttpService } from '../service/http.service';
import moment from 'moment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {
 public params!:string;
 public chart!: Chart
 public weatherData!:any[];
 public errorMessage:string='';
 constructor(private activateRoute:ActivatedRoute, private httpService:HttpService){  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param:any)=>{
      if(param){
        this.params=param['state']
        this.getStateWeather(this.params)
      }
    })
  }

  getStateWeather(param: string) {
    this.httpService.getWeatherDetails(param).subscribe((response: any) => {
      this.errorMessage=''
      this.weatherData = response.properties.periods;
      let temperature = []
      let dates = []
      for(let weather of this.weatherData){
        temperature.push(weather.temperature )
        dates.push( moment(weather.startTime).format('MMMM D YYYY HH:MM'))
      }
      if(this.chart)
       this.chart.destroy()
       this.createChart(temperature,dates)
    },  (error: any) => {
      this.errorMessage=error.message
      if(this.chart)
       this.chart.destroy()
      console.log(error,'error')
      console.error('Error on fetching weather details:', error.message);
      
    });
  }

  createChart(temperature:number[], dates:string[]){
    this.chart = new Chart("MyChart", {
      type: 'line', 
      data: {
        labels: dates, 
	       datasets: [
          {
            label: this.params=='TOP' ? 'Kansas Forecast Chart' : 'District of Columbia Forecast Chart',
            data:temperature,
            backgroundColor: 'cyan'
          },
        ]
      },
      options: {
        aspectRatio:3.5
      }
    });
  }
}
