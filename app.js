import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'

import TarjetasCreditoRoutes from './src/routes/tarjeta_credito.js'
import UsuariosRoutes from './src/routes/usuarios.js'
import TarjetasDebitoRoutes from './src/routes/tarjeta_debito.js'
import IngresosRoutes from './src/routes/ingreso.js'
import GastosRoutes from './src/routes/gasto.js'
import CategoriaRoutes from './src/routes/categoria.js'



let app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/tarjetas_credito", TarjetasCreditoRoutes);
app.use("/usuarios", UsuariosRoutes);
app.use("/tarjetas_debito", TarjetasDebitoRoutes);
app.use("/gastos", GastosRoutes);
app.use("/ingresos", IngresosRoutes);
app.use("/categoria", CategoriaRoutes);


export default app;