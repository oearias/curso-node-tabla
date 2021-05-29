const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .check( (argv, options) =>{
        if(isNaN( argv.b  )){
            throw "La base tiene que ser un número"
        }
        return true;
    } )
    .option('l',{
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla en consola'
    })     
    .option('h',{
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Indica hasta que numero va a multiplicar la tabla'
    })
    .check( (argv, options) =>{
        if(( argv.h < 1)){
            throw "El límite tiene que ser mínimo 1"
        }
        return true;
    } )      
    .argv;


    module.exports = argv;