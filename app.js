const express = require("express")
const morgan = require("morgan")
const app = express()
app.use(morgan("dev"))
app.set("port",80)
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use("/moneda",require("./Rutas/rutaApi"))
module.exports = app;