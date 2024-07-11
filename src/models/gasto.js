import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Tarjeta_Credito from "./tarjeta_credito.js"
import Tarjeta_Debito from "./tarjeta_debito.js"
import Categoria from "./categoria.js"

const Gasto = sequelize.define('gastos', {
    idGasto: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    fecha: {
        type: DataTypes.DATE
    },
    hora: {
        type: DataTypes.DATE
    },
    idCategoria: {
        type: DataTypes.INTEGER
    },
    monto: {
        type: DataTypes.DOUBLE
    },
    descripcion:{
        type: DataTypes.STRING
    },
    nroCuotas: {
        type:DataTypes.INTEGER,
        default: 0
    },
    idTarjetaCredito:{
        type: DataTypes.STRING
    },
    idTarjetaDebito:{
        type: DataTypes.STRING
    }
}) 

Gasto.belongsTo(Tarjeta_Credito, {
    foreignKey: 'idTarjetaCredito',
    targetId: 'idTarjetaCredito'
})

Tarjeta_Credito.hasMany(Gasto, {
    foreignKey: 'idTarjetaCredito',
    sourceKey: 'idTarjetaCredito'
})

Gasto.belongsTo(Tarjeta_Debito, {
    foreignKey: 'idTarjetaDebito',
    targetId: 'idTarjetaDebito'
})

Tarjeta_Debito.hasMany(Gasto, {
    foreignKey: 'idTarjetaDebito',
    sourceKey: 'idTarjetaDebito'
})

Categoria.belongsTo(Gasto, {
    foreignKey: 'idCategoria',
    targetId: 'idCategoria'
})

export default Gasto;