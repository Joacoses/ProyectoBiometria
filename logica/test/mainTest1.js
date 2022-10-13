// ........................................................
// mainTest1.js
// ........................................................
const Logica = require("../logica.js")
var assert = require('assert')
// ........................................................
// main ()
// ........................................................
describe("Test 1: insertar una persona", function () {
    // ....................................................
    // ....................................................
    var laLogica = null
    // ....................................................
    // ....................................................
    it("conectar a la base de datos", function (hecho) {
        laLogica = new Logica(
            "../bd/datos.bd",
            function (err) {
                if (err) {
                    throw new Error("No he podido conectar con datos.db")
                }
                hecho()
            })
    }) // it
    // ....................................................
    // ....................................................
    it("borrar todas las filas", async function () {
        await laLogica.borrarFilasDeTodasLasTablas()
    }) // it
    
    // ....................................................
    // ....................................................
    it("puedo insertar una medida",
    async function () {
        await laLogica.insertarMedida(
            {
                tipoMedida: "Co3", medida: "33",
                fecha: "8/04/22"
            })
        var res = await laLogica.buscarMedidaConFecha("8/04/22")
        assert.equal(res.length, 1, "¿no hay un resulado?")
        assert.equal(res[0].fecha, "8/04/22", "¿no es 8/04/22?")
        assert.equal(res[0].medida, "33", "¿no es 33?")
    }) // it


    // ....................................................
    // ....................................................
    it("cerrar conexión a la base de datos",
        async function () {
            try {
                await laLogica.cerrar()
            } catch (err) {
                // assert.equal( 0, 1, "cerrar conexión a BD fallada: " + err)
                throw new Error("cerrar conexión a BD fallada: " + err)
            }
        }) // it
}) // describe