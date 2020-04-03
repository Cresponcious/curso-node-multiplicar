'use strict'

const { argv } = require('./config/yargs');
const colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(lista => console.log(`Lista de los ${ argv.limite } elementos de la tabla del ${ argv.base } \n${ lista }`))
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado ${ archivo.green }`))
            .catch(err => console.log(err));
        break
    default:
        console.log('comando no reconocido');
        break;
}