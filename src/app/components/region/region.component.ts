import { Component, OnInit } from '@angular/core';
import { InformacionPaisesService } from '../../services/informacion-paises.service';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styles: [],
})
export class RegionComponent implements OnInit {
  public paises: any[] = [];

  constructor(private informacion: InformacionPaisesService) {}

  regiones = [
    'EU (European Union)',
    'PA (Pacific Alliance)',
    'CAIS (Central American Integration System)',
    'CEFTA (Central European Free Trade Agreement)',
    'NAFTA (North American Free Trade Agreement)',
  ];

  buscarCiudades(region: string) {
    this.informacion.getPaises(region).subscribe((data: any) => {
     this.paises = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
