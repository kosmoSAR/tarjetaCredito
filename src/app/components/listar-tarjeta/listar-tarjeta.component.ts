import { Component, Input  } from '@angular/core';
import { TarjetCredito } from 'src/app/models/tarjeta';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-tarjeta',
  templateUrl: './listar-tarjeta.component.html',
  styleUrls: ['./listar-tarjeta.component.css']
})
export class ListarTarjetaComponent {

  @Input() tarjetasActivas:any;

}
