import Impuesto from "./impuestos.js";
import Cliente from "./cliente.js";

let impuesto1 = new Impuesto({monto: 2000000, deducciones: 78500})
let cliente1 = new Cliente({nombre: "ramoncito", impuesto: impuesto1})

const mensaje = (cliente) => {
    return `
    El cliente ${cliente.nombre}, con un monto anual de ${cliente.impuesto.monto_bruto_anual} y deducciones de ${cliente.impuesto.deducciones}
    presenta un impuesto a cancelar de ${cliente.calcularImpuesto()}.\n\t Se aconseja pagarlo a la brevedad`
}

let mensaje1 = mensaje(cliente1)
console.log(mensaje1)