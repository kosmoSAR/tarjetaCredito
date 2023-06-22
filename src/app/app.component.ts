import { Component } from '@angular/core';
import { TarjetCredito } from './models/tarjeta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaTarjetas: TarjetCredito[]=[];

  adicionarTarjeta(tarjeta:TarjetCredito){
    console.log("tarjeta añadida"); 
    this.listaTarjetas.push(tarjeta);
  }

  constructor() {}

  title = 'tarjetaCredito';
}
