import { Component, EventEmitter, Output  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetCredito } from 'src/app/models/tarjeta';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-crear-tarjeta',
  templateUrl: './crear-tarjeta.component.html',
  styleUrls: ['./crear-tarjeta.component.css']
})
export class CrearTarjetaComponent {

  forms:FormGroup;
  
  @Output() parametrosSeleccionados = new EventEmitter<any>()

  constructor(private fb:FormBuilder, private _tarjetaService:TarjetaService){
    this.forms = this.fb.group({
      titular:['', Validators.required],
      nroTarjeta:['', [Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion:['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
    })
  }

  crearTarjeta(){
    const TARJETA:TarjetCredito = {
      titular: this.forms.value.titular,
      numeroDeTarjeta: this.forms.value.nroTarjeta,
      cvv: this.forms.value.cvv,
      fechaActualizacion: new Date(),
      fechaCreacion: new Date(),
      fechaExpiracion: new Date()
    }

    console.log(TARJETA);
    this.parametrosSeleccionados.emit(TARJETA);
    
  }

}
