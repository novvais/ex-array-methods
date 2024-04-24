const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

let frutasFormatadas = frutas.reverse();

frutas.shift().pop();
frutasFormatadas.push("Melão");

frutasFormatadas.join();

console.log(frutas);
console.log(frutasFormatadas);