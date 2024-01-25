const { Schema, model, default: mongoose } = require("mongoose")

const schemaCambioMoneda = new Schema(
    {
        monedaOrigen: { type:  String , require: true },
        valor: { type:  Number , require: true },
        monedaDestino: { type: String, require: true },
        cambio: { type: Number, require: true },
    },
    {
        timestamps: true
    });

module.exports = model("moneda", schemaCambioMoneda);
