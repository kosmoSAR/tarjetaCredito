export class TarjetCredito{
    id?:string;
    titular:string;
    numeroDeTarjeta:string;
    cvv:number;
    fechaCreacion:Date;
    fechaActualizacion:Date;
    fechaExpiracion:Date;

    constructor(titular:string, numeroDeTarjeta:string, cvv:number){
        this.titular = titular;
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.cvv = cvv;
        this.fechaCreacion = new Date();
        this.fechaActualizacion = new Date();
        this.fechaExpiracion = new Date();
    }
}