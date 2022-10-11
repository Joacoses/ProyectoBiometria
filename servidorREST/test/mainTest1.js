// ........................................................
// mainTest1.js
// ........................................................
var request = require('request')
var assert = require('assert')
// ........................................................
// ........................................................
const IP_PUERTO = "http://localhost:8080"
// ........................................................
// main ()
// ........................................................
describe("Test 1 : Recuerda arrancar el servidor", function () {
    // ....................................................
    // ....................................................
    it("probar que GET /prueba responde ¡Funciona!", function (hecho) {
        request.get(
            { url: IP_PUERTO + "/prueba", headers: { 'User-Agent': 'JoanCosta' } },
            function (err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                assert.equal(carga, "¡Funciona!", "¿La carga no es ¡Funciona!?")
                hecho()
            } // callback()
        ) // .get
    }) // it
    // ....................................................
    // ....................................................
    it("probar GET /dividir", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/dividir?a=10&b=2.5",
                headers: {
                    'User-Agent': 'JoanCosta'
                }
            },
            function (err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                var solucion = JSON.parse(carga)
                assert.equal(solucion.division, 4, "¿El cociente es no es 4?")
                hecho()
            } // callback
        ) // .get
    }) // it

    //--------------------------------------------------------------
    it("probar GET /dni", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/dni",
                headers: {
                    'User-Agent': 'JoanCosta'
                }
            },
            function (err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                var solucion = JSON.parse(carga)
                assert.equal(solucion[0].dni, '1234A', "¿El cociente es no es 4?")
                hecho()
            } // callback
        ) // .get
    }) // it
    // ....................................................
    // ....................................................
    it("probar GET /fecha", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/fecha",
                headers: {
                    'User-Agent': 'JoanCosta'
                }
            },
            function (err, respuesta, carga) {
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                var solucion = JSON.parse(carga)
                assert.equal(solucion[0].fecha, '8/04/22', "¿La fecha no es 8/04/22?")
                hecho()
            } // callback
        ) // .get
    }) // it

    // ....................................................
    // ....................................................
    it("probar GET /medida", function (hecho) {
        request.get(
            {
                url: IP_PUERTO + "/medida",
                headers: {
                    'User-Agent': 'JoanCosta'
                }
            },
            function (err, respuesta, carga) {
                //assert.equal(err, null, "¿ha habido un error?")
                //assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                var solucion = JSON.parse(carga)
                assert.equal(solucion[0].medida, '33', "¿La fecha no es 8/04/22?")
                hecho()
            } // callback
        ) // .get
    }) // it


/*
    it("probar POST /alta", function (hecho) {
        var datosMedida = {
            tipoMedida: "O23", medida: "58", fecha: "94/58/2025"
        }
        request.post(
            {
                url: IP_PUERTO + "/alta",
                headers: { 'User-Agent': 'JoanCosta', 'Content-Type': 'application/json' },
                body: JSON.parse(datosMedida)
            },
            function (err, respuesta, carga) {
                console.log(err);
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                assert.equal(carga, "OK", "¿La carga no es OK")
                hecho()
            } // callback
        ) // .post
    })//it



*/

    /*
    // ....................................................
    // ....................................................
    it("probar POST /alta", function (hecho) {
        var datosPersona = {
            dni: "1235A", nombre: "Pepe", apellidos: "García Pérez"
        }
        request.post(
            {
                url: IP_PUERTO + "/alta",
                headers: { 'User-Agent': 'JoanCosta', 'Content-Type': 'application/json' },
                body: JSON.stringify(datosPersona)
            },
            function (err, respuesta, carga) {
                console.log(err);
                assert.equal(err, null, "¿ha habido un error?")
                assert.equal(respuesta.statusCode, 200, "¿El código no es 200 (OK)")
                assert.equal(carga, "OK", "¿La carga no es OK")
                hecho()
            } // callback
        ) // .post
    }) // it*/
}) // describe