export class Usuario{
    nombre:string =""
    edad:number = 0
    tipo:string =""
    email:string = ""
    contrasena:string =""
    constructor(nombre:string,edad:number,tipo:string,email:string,contrasena:string){
        this.nombre = nombre
        this.edad = edad
        this.tipo = tipo
        this.email = email
        this.contrasena = contrasena
    }
}