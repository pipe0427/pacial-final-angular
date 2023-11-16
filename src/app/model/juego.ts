export class Juego{
    id:string = ""
    nombre: string =""
    fechaLanzamiento!:Date
    precio:number = 0
    edadPermitida:number = 0
    img:string = ""
    descuento:boolean = false

    constructor(id:string,nombre:string,fechaLanzamiento:Date,precio:number,edadPermitida:number,img:string,descuento:boolean){
        this.nombre =nombre
        this.fechaLanzamiento = fechaLanzamiento
        this.precio =precio
        this.edadPermitida= edadPermitida
        this.img = img
        this.descuento = descuento
    }
}