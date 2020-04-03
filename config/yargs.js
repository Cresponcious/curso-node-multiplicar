'use strict'

const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multplicar', opts)
    .command('crear', 'Crea tabla de multiplicar de acuerdo a la base definida', opts)
    .help()
    .argv;

module.exports = {
    argv
}