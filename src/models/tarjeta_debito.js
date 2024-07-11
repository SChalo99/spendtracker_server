import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from "./usuario.js"

const Tarjeta_Debito = sequelize.define('tarjeta_debitos', {
    idTarjetaDebito: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    numeroTarjeta: {
        type: DataTypes.STRING
    },
    numeroCuenta: {
        type: DataTypes.STRING
    },
    fechaVencimiento: {
        type: DataTypes.DATE
    },
    moneda: {
        type: DataTypes.STRING
    },
    operadoraFinanciera: {
        type: DataTypes.STRING
    },
    ingresoMinimo:{
        type: DataTypes.DOUBLE
    },
    idUsuario:{
        type: DataTypes.STRING
    }
}) 

Tarjeta_Debito.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'idTarjetaDebito'
})

Tarjeta_Debito.hasMany(Usuario, {
    foreignKey: 'idUsuario',
    sourceKey: 'idTarjetaDebito'
})


export default Tarjeta_Debito;