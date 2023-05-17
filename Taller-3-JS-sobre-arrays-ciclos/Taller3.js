let longitud = 0;
let mayor = 0;
let impares=0;
let recorrido=0;

function mayorArray(arreglo){
    if(arreglo.length === 0 ){
        return null;
    }else if (arreglo.length===1){
        return arreglo[0];
    }

for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    }
}

while(longitud<arreglo.length){
    console.log(arreglo[longitud])
    longitud++;
}
do{
    if(arreglo[impares] %2 !== 0){
    recorrido++;
    }
    impares++;
}while(impares<arreglo.length);
console.log("La cantidad de numeros impares es: " + recorrido);

return mayor;
 }

const numeros = [5,8,6,3,9,4];
const resultado = mayorArray(numeros);
console.log("El número mayor del array es: " + resultado);