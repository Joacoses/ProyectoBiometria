// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require("sqlite3")
// .....................................................................
// .....................................................................
module.exports = class Logica {
    // .................................................................
    // nombreBD: Texto
    // -->
    // constructor () -->
    // .................................................................
    constructor(nombreBD, cb) {
        this.laConexion = new sqlite3.Database(
            nombreBD,
            (err) => {
                if (!err) {
                    this.laConexion.run("PRAGMA foreign_keys = ON")
                }
                cb(err)
            })
    } // ()
    // .................................................................
    // nombreTabla:Texto
    // -->
    // borrarFilasDe() -->
    // .................................................................
    borrarFilasDe(tabla) {
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(
                "delete from " + tabla + ";",
                (err) => (err ? rechazar(err) : resolver()))
        })
    } // ()
    // .................................................................
    // borrarFilasDeTodasLasTablas() -->
    // .................................................................
    async borrarFilasDeTodasLasTablas() {
        await this.borrarFilasDe("Medidas")
        //await this.borrarFilasDe("Medidas") --------------------------------------------- cambiar
    } // ()
    // .................................................................
    // datos:{tipoMedida:Texto, medida:Texto: fecha:Texto}
    // -->
    // insertarMedida() -->
    // .................................................................
    insertarMedida(datos) {
        var textoSQL = 'insert into Medidas values(NULL, $tipoMedida, $medida, $fecha);'
        var valoresParaSQL = {
            $tipoMedida: datos.tipoMedida, $medida: datos.medida,  //habra que cambiar
            $fecha: datos.fecha //"05/5/22" //habra que cambiar
        }
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
                (err ? rechazar(err) : resolver())
            })
        })
    } // ()

    // .................................................................
    // fecha:Texto
    // -->
    // buscarMedidaConFecha() <--
    // <--
    // {id:int, tipoMedida:Texto, medida:Texto: fecha:Texto}
    // .................................................................
    buscarMedidaConFecha(fecha) {
        var textoSQL = "select * from Medidas where fecha=$fecha";
        var valoresParaSQL = { $fecha: fecha }
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL,
                (err, res) => {
                    (err ? rechazar(err) : resolver(res))
                })
        })
    } // ()

    // .................................................................
    // 
    // -->
    // buscarMedidaMasReciente() -->
    // <--
    // datos:{id:int, tipoMedida: texto, medida:texto, fecha:date}
    // .................................................................
    buscarMedidaMasReciente() {
        var textoSQL = "SELECT * FROM Medidas ORDER BY id DESC LIMIT 1";
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, [],
                (err, res) => {
                    (err ? rechazar(err) : resolver(res))
                })
        })
    } // ()

    // .................................................................
    // cerrar() -->
    // .................................................................
    cerrar() {
        return new Promise((resolver, rechazar) => {
            this.laConexion.close((err) => {
                (err ? rechazar(err) : resolver())
            })
        })
    } // ()
} // class
// .....................................................................
// .....................................................................