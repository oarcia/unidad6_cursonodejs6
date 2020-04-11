//api del clima pero con la variante directo de darle opcion alos comandos
//instalamos axios npm i axios requerimos axios con el comando de abajo
//const axios = require('axios');
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Direccion de la ciuidad para obetner el clima',
        demand: true
    }
}).argv;


//lugar.getLugarLatLng(argv.direccion)
//    .then(console.log);
//

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);

        const temp = await clima.getClima(coords.lat, coords.lng)

        return `el clima de ${coords.direccion} es de ${ temp }`
    } catch (error) {

        return ` No se puedo determinar la direccion ${direccion}`

    }




    //salida
    //clima de tal lugar es de xx
    //no se puede determinar el clima de tal lugar
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)

//clima.getClima(40.750000, -74.000000)
//    .then(console.log)
//    .catch(console.log)
//    //buscamos axios y request npm i axios


//console.log(argv.direccion);

//al meter la direccion en una constante donde la funcion de encodeURI 
//arhv direccion 
//const encodedUlr = encodeURI(argv.direccion);
//console.log(encodedUlr);
//
//
//
////consfiguramos hacia a donde apuntaremos o axios depues en la url ponemos el path que vamos a mandar.
//const instance = axios.create({
//    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
//    headers: { 'x-rapidapi-key': '28cc074199mshb6d485e53b93caep12e41ejsn3942bd79f4a1' }
//});
//
////como trbaja con promesas ponemos then despues que se cumpla y un catch cuando se cumplio
//
//instance.get().then(resp => {
//    console.log(resp.data.Results[0])
//}).catch(error => {
//    console.log('ERROR!!!', error);
//});