/*class a{
    constructor(nombre){
        this.nombre= nombre;
    }

}

class b{
    constructor(apellido){
        this.apellido = apellido
    }
}

class c {
    constructor(nombre, apellido){
        this.a = new a(nombre);
        this.b = new b(apellido);
    }

    invocar(){
        return`${this.a.nombre} + ${this.b.apellido}`
    }
}

let obj = new c('Gustavo', 'Merlos');
alert(obj.invocar())*/

class Cliente{
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Automovil{
    constructor(modelo){
        this.modelo = modelo
    }
}

class Credito{
    constructor(nombre, modelo, cantidad){
        this.c = new Cliente(nombre);
        this.m = new Automovil(modelo);
        this.cantidad = cantidad;
    }

    Mostrar(){
        return `El cliente ${this.c.nombre} Recibe el carro ${this.m.modelo} al credito de $${this.cantidad}`
    }
}

let negocio = new Credito('Pablo', 'Ferrari', 677836)
alert(negocio.Mostrar())