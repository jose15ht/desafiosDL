//Instancia funcion creadora Consultorio
function Consultorio(nombre, paciente){
    this._nombre = function () {
        return nombre
    }

    this.paciente = paciente  || []
}
//instancia funcion creadora Paciente
function Paciente({nombre,edad,rut,diagnostico}){
    this._nombre = function () {
        return nombre
    }
    this._edad = function () {
        return edad
    }
    this._rut = function () {
        return rut
    }
    this._diagnostico = function () {
        return diagnostico
    }
}
//Metodos getter y setter de objetos Paciente
Paciente.prototype.getNombre = function () {
    return this._nombre()
}

Paciente.prototype.getEdad = function () {
    return this._edad()
}

Paciente.prototype.getRut = function () {
    return this._rut()
}

Paciente.prototype.getDiagnostico = function () {
    return this._diagnostico()
}

Paciente.prototype.setNombre = function (nombre) {
    this._nombre = function () {
        return nombre
    }
}

Paciente.prototype.setEdad = function (edad) {
    this._edad = function () {
        return edad
    }
}

Paciente.prototype.setRut = function (rut) {
    this._rut = function () {
        return rut
    }
}

Paciente.prototype.setDiagnostico = function (diagnostico) {
    this._diagnostico = function () {
        return diagnostico
    }
}
//metodos Consultorio 
Consultorio.prototype.getNombre = function(){
    return this._nombre()
}
Consultorio.prototype.add_paciente = function(paciente) {
    this.paciente.push(paciente)
}

//obtener datos de los pacientes por nombre
Consultorio.prototype.getPaciente = function(nombre){
    this.paciente.filter(function(p) {
        if(p.getNombre() == nombre){
            console.log(p.getNombre(), p.getEdad(), p.getRut(), p.getDiagnostico())            
        }
    } )
}

//obtener todos los datos de todos los pacientes
Consultorio.prototype.getAllPacientes = function () {
    this.paciente.forEach(function (p) {
        console.log(p.getNombre(), p.getEdad(), p.getRut(), p.getDiagnostico())
    })
}