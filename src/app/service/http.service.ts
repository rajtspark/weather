import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getWeatherDetails(state: string) {
    let url = `https://api.weather.gov/gridpoints/${state}/31,80/forecast`; 
    return this.http.get(url); 
  }
}