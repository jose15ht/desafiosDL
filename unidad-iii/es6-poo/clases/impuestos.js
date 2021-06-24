export default class Impuesto {
    constructor({monto: monto_bruto_anual, deducciones: deducciones}){
        this._monto_bruto_anual = monto_bruto_anual
        this._deducciones = deducciones
    }
    get monto_bruto_anual() {
        return this._monto_bruto_anual
    }

    set monto_bruto_anual(nuevoMonto) {
        this._monto_bruto_anual = nuevoMonto
    }

    get deducciones(){
        return this._deducciones
    }

    set deducciones(nuevaDeduccion) {
        this._deducciones = nuevaDeduccion
    }
}