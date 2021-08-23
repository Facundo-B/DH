const fs = require('fs');
let arrayDeNotas = require('./notas.json');

let leerInput = (input) => {
    switch (input) {
        case "listar":
            for (nota of arrayDeNotas) {
                console.log(nota.titulo);
                console.log(nota.descripcion)
                console.log("")
            }
            break;
        case undefined:
            console.log("Atención - Tienes que pasar una acción.");
            break;
        default:
            console.log("No entiendo qué quieres hacer.");
    }
}

/*
let nuevaNota = {
    titulo: "Una nueva nota",
    descripcion: "Esta es una nueva nota",
    estado: "pendiente"
}

arrayDeNotas.push(nuevaNota);

let nuevoJsonNotas = JSON.stringify(arrayDeNotas, null, 4);

fs.writeFileSync('./notas.json', nuevoJsonNotas);
*/

module.exports = leerInput;