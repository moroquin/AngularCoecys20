import { Component, OnInit, Input } from '@angular/core';
import { InformacionPaisesService } from '../../services/informacion-paises.service';

@Component({
  selector: 'app-pais',
  templateUrl: './pais.component.html',
  styleUrls: ['./pais.component.css'],
})
export class PaisComponent implements OnInit {
  @Input() pais: any;
  loading = true;
  temp: string;

  constructor(private informacion: InformacionPaisesService) {}

  ngOnInit(): void {
    let wait = Math.floor(Math.random() * (4000 - 2000) + 2000);
    setTimeout(() => {
      this.informacion.getTemperatura(this.pais.capital).subscribe((data) => {
        this.temp = data['list'][0]['main']['temp'];
        this.loading = false;
        console.log(this.temp);
      });
    }, wait);
  }
}
