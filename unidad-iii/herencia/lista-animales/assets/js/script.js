class Propietario{
    constructor({nombre:nombre,direccion:direccion,telefono:telefono}){
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }
    datosPropietario(){
        return `El nombre del dueño es ${this._nombre}. El domicilio es ${this._direccion} y el número telefónico es: ${this._telefono}`
    }
}

class Animal extends Propietario{
    constructor({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo}){
        super({nombre:nombre,direccion:direccion,telefono:telefono})
        this._nombreAnimal = nombreAnimal
        this._tipo = tipo
    }
    datosAnimal() {
        return `El nombre del animal es: ${this._nombreAnimal}.Siendo este un: ${this._tipo} y su enfermedad es: `
    }
}

class Perro extends Animal {
    constructor({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo,enfermedad:enfermedad}){
        super({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo})
        this._enfermedad = enfermedad
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad
    }
}

class Gato extends Animal {
    constructor({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo,enfermedad:enfermedad}){
        super({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo})
        this._enfermedad = enfermedad
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad
    }
}

class Conejo extends Animal {
    constructor({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo,enfermedad:enfermedad}){
        super({nombre:nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreAnimal,tipo:tipo})
        this._enfermedad = enfermedad
    }
    get enfermedad() {
        return this._enfermedad
    }
    set enfermedad(nuevaEnfermedad) {
        this._enfermedad = nuevaEnfermedad
    }
}
//boton que captara los datos para crear el objeto de clase definida y pintara en el documento html los datos solicitados
let agregar = document.querySelector("button")
agregar.addEventListener("click", registrar )

function registrar (e){
    e.preventDefault()
  let nombre = document.getElementById("propietario").value
  let direccion = document.getElementById("direccion").value 
  let telefono = document.getElementById("telefono").value
  let nombreMascota = document.getElementById("nombreMascota").value
  let tipo = document.getElementById("tipo").value
  let enfermedad = document.getElementById("enfermedad").value

  let mascota 
  switch(tipo) {
    case "perro":
      mascota = new Perro({nombre: nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreMascota,tipo:tipo,enfermedad:enfermedad})
      break;
    case "gato":
      mascota = new Gato({nombre: nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreMascota,tipo:tipo,enfermedad:enfermedad})
      break;
    case "conejo":
      mascota = new Conejo({nombre: nombre,direccion:direccion,telefono:telefono,nombreAnimal:nombreMascota,tipo:tipo,enfermedad:enfermedad})
      break;
  }

  let ul = document.querySelector("ul")
  ul.innerHTML = 
        `<li>${mascota.datosPropietario()} </li>
         <li>${mascota.datosAnimal()} ${mascota.enfermedad}</li>
        `
  clear()
}

function clear(){
    document.getElementById("propietario").value = ""
    document.getElementById("direccion").value = ""
    document.getElementById("telefono").value = ""
    document.getElementById("nombreMascota").value = ""
    document.getElementById("tipo").value = ""
    document.getElementById("enfermedad").value = ""
}


