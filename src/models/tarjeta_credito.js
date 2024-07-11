import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Usuario from "./usuario.js"

const Tarjeta_Credito = sequelize.define('tarjeta_creditos', {
    idTarjetaCredito: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    numeroTarjeta: {
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
    fechaFacturacion:{
        type: DataTypes.DATE
    },
    tasaInteres: {
        type:DataTypes.DOUBLE
    },
    lineaCredito: {
        type: DataTypes.DOUBLE
    },
    ultimoDiaPago: {
        type: DataTypes.DATE
    },
    idUsuario:{
        type: DataTypes.STRING
    },
    montoDesgravamen:{
        type: DataTypes.DOUBLE
    }
}) 

Tarjeta_Credito.belongsTo(Usuario, {
    foreignKey: 'idUsuario',
    targetId: 'idTarjetaCredito'
})

Tarjeta_Credito.hasMany(Usuario, {
    foreignKey: 'idUsuario',
    sourceKey: 'idTarjetaCredito'
})


export default Tarjeta_Credito;