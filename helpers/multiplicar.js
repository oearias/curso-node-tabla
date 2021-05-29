const fs = require('fs');
const colors = require('colors/safe');


const createFile = async (base, lista, hasta) => {

    //creado con promesa

    /*return new Promise((resolve, reject) => {

        console.log("=================");
        console.log(`===Tabla-${base}===`);
        console.log("=================");

        let salida = "";

        for (let i = 1; i < 11; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;

            console.log(salida);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt`);

    })*/

    //creado con async

    try {
        console.clear();



        let consola = ''
        let salida = "";

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            salida += `${base} ${'x'} ${i} ${'='} ${base * i}\n`;
        }

        if (lista) {
            console.log("====================".green);
            console.log('====Tabla del:'.brightYellow, colors.brightCyan(base),'==='.brightYellow)
            console.log("====================".brightRed);

            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);
    } catch (err) {
        throw err;
    }



}

/*const createFile = (base = 5) => {
    let salida = "";

    console.log("=================");
    console.log(`===Tabla-${base}===`);
    console.log("=================");

    for (let i = 1; i < 11; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;

        console.log(salida);
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);
}*/






module.exports = {
    createFile
}