export class TarjetCredito{
    id?:string;
    titular:string;
    numeroDeTarjeta:string;
    cvv:number;
    fechaCreacion:Date = new Date();
    fechaActualizacion:Date = new Date();

    constructor(titular:string, numeroDeTarjeta:string, cvv:number){
        this.titular = titular;
        this.numeroDeTarjeta = numeroDeTarjeta;
        this.cvv = cvv;
    }
}