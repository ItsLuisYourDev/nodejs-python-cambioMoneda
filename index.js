require("./conexion")
const app = require("./app")
app.listen(app.get("port"));
console.log("Servidor ejecutandose en el puerto ",app.get("port"))