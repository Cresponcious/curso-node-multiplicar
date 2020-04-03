'use strict'
const colors = require('colors');
const fs = require('fs');

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${ base }.txt`)
        });
    })
}

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un número`);
            return;
        }

        let titulo = `====================\n== Tabla del ${ base } ==\n====================\n`.green
        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += ` ${ base } * ${ i } = ${ base * i }\n`;
        }
        resolve(titulo + data);

    })

}

module.exports = {
    crearArchivo,
    listarTabla
}