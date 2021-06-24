export default class Cliente {
    constructor({nombre: nombre, impuesto: impuesto}){
        this._nombre = nombre
        this.impuesto = impuesto || []
    }
    get nombre() {
        return this._nombre
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre
    }
    agregarImpuesto(nuevoImpuesto){
        this.impuesto.push(nuevoImpuesto)
    }
    calcularImpuesto(){
        return ((this.impuesto.monto_bruto_anual - this.impuesto.deducciones) / 100 * 21 )
    }

}