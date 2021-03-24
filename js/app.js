class cabaña { constructor(ambiente, cocina, calefaccion, cochera, valor) {
    this.ambiente = ambiente;
    this.cocina = cocina;
    this.calefaccion = calefaccion;
    this.cochera = cochera;
    this.valor = valor;
}
}
const cabaña_economica= new cabaña(2, "equipada", "aire frio-calor", "compartida", 2000);
const cabaña_familiar= new cabaña(3, "equipada", "radiadores", "compartida", 5000);
const cabaña_ejecutiva= new cabaña(4, "equipada", "radiadores y hogar a leña", "privada", 8000);
console.log(cabaña_economica);
console.log(cabaña_familiar);
console.log(cabaña_ejecutiva);
