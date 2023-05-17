let precioBase;
let descuento;
let precioFinal;

function calcularPrecio(precioBase,descuento){


    if (precioBase <=0 || precioBase >100){
        return "Los valores ingresados son invalidos";

    }else if(descuento===0){
        return precioBase;
    }else if(descuento > 0 && descuento <= 100){
        precioFinal= ((precioBase*descuento)/100);
        precioFinal = precioBase - precioFinal;
        return "Su precio final es: " + precioFinal;
    }
}
console.log(calcularPrecio(-100,50));
console.log(calcularPrecio(100,50));
console.log(calcularPrecio(20,20));