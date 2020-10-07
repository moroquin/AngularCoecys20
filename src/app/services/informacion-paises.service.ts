import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class InformacionPaisesService {
  constructor(private http: HttpClient) {}

  getPaises(region: string) {
    let url =
      'https://restcountries.eu/rest/v2/regionalbloc/' +
      region.toLowerCase().trim();
    return this.http.get(url);
  }

  getTemperatura(ciudad: string) {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': '9b218c2534msh0f9f8ddbf84efc2p11827cjsn20adccaf8350',
    });
    const url =
      'https://community-open-weather-map.p.rapidapi.com/find?type=link%252C%20accurate&units=metric&q=' +
      ciudad;

    return this.http.get(url, { headers });
  }
}
