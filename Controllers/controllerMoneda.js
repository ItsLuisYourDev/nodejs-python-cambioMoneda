const Moneda = {}
const modeloMoneda = require("../Modelo/cMoneda")

Moneda.consultar_todo = async (req, res) => {
    resultado = await modeloMoneda.find()
    res.json(resultado)
}

Moneda.guardar_nuevo = async (req, res) => {
    console.log(req.body)
    var cambio = 0;
    const monedaDestino = req.body.monedaDestino;
    if (req.body.monedaOrigen == "dolar") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 18.40;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 3.84;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 5.16;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.94;

        } else {
            cambio = req.body.valor;
        }
    } else if (req.body.monedaOrigen == "euro") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 19.67;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 4.11;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 5.52;

        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 1.07;

        } else {
            cambio = req.body.valor;
        }
    } else if (req.body.monedaOrigen == "Peso-Mexicano") {
        if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.054;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 0.21;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 0.28;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.051;
        } else {
            cambio = req.body.valor;
        }
    } else if (req.body.monedaOrigen == "sol") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 4.79;
        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.26;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 1.34;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.24;

        } else {
            cambio = req.body.valor;
        }
    } else if (req.body.monedaOrigen == "real") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 3.57;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 0.75;

        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.19;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.18;

        } else {
            cambio = req.body.valor;
        }
    } else {
        cambio = req.body.valor;
    }


    const nuevoregistro = new modeloMoneda({
        monedaOrigen: req.body.monedaOrigen,
        valor: req.body.valor,
        monedaDestino: req.body.monedaDestino,
        cambio: cambio
    });
    await nuevoregistro.save();
    res.json({ status: "Equipo creado satisfactoriamente" })
}

Moneda.actualiza_datos = async (req, res) => {
    const miide = req.body.id
    const monedaDestino = req.body.monedaDestino
    //const req.body = await modeloMoneda.findById(miide)
    var cambio = 0;
    if (req.body.monedaOrigen == "dolar") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 18.40;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 3.84;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 5.16;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.94;

        } else {
            console.log("error en dolar")
        }
    } else if (req.body.monedaOrigen == "euro") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 19.67;
        } else if (monedaDestino == "sol") {
            console.log("erorr")
            cambio = req.body.valor * 4.11;
            
        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 5.52;

        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 1.07;

        } else {
            console.log("error en cambio de euro")
        }
    } else if (req.body.monedaOrigen == "Peso-Mexicano") {
        if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.054;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 0.21;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 0.28;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.051;
        }
    } else if (req.body.monedaOrigen == "sol") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 4.79;
        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.26;

        } else if (monedaDestino == "real") {
            cambio = req.body.valor * 1.34;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.24;

        }
    } else if (req.body.monedaOrigen == "real") {
        if (monedaDestino == "Peso-Mexicano") {
            cambio = req.body.valor * 3.57;
        } else if (monedaDestino == "sol") {
            cambio = req.body.valor * 0.75;

        } else if (monedaDestino == "dolar") {
            cambio = req.body.valor * 0.19;

        } else if (monedaDestino == "euro") {
            cambio = req.body.valor * 0.18;

        }
    } else {
        console.log("error en el cambio")
    }
    console.log(cambio)
    await modeloMoneda.findByIdAndUpdate(miide, {
        monedaOrigen: req.body.monedaOrigen,
        valor: req.body.valor,
        monedaDestino: req.body.monedaDestino,
        cambio: cambio
    });
    res.json({ status: "Datos actualizados" })
}

Moneda.elimina1 = async (req, res) => {
    const miide = req.params.id
    await modeloMoneda.findByIdAndDelete(miide)
    res.json({ status: "Registro eliminado" })
}
Moneda.consultar1 = async (req, res) => {
    const miide = req.params.id
    const dato = await modeloMoneda.findById(miide)
    res.json(dato)
}
module.exports = Moneda;