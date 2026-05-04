
let frutas = ["manzana", "banana", "naranja", "pera", "uva", "manzana", "naranja", "manzana"];

let conteoFrutasFor = {};


for (let i = 0; i < frutas.length; i++) {
    let frutaActual = frutas[i];
    
    if (conteoFrutasFor[frutaActual]) {
        conteoFrutasFor[frutaActual]++;
    } else {
        conteoFrutasFor[frutaActual] = 1;
    }
}


console.log("--- Resultados FOR ---");
for (let fruta in conteoFrutasFor) {
    console.log(fruta + ": " + conteoFrutasFor[fruta]);
}