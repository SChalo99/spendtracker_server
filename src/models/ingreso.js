import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Tarjeta_Debito from "./tarjeta_debito.js"

const Ingreso = sequelize.define('ingresos', {
    idIngreso: {
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
    monto: {
        type: DataTypes.DOUBLE
    },
    descripcion:{
        type: DataTypes.STRING
    },
    idTarjetaCredito:{
        type: DataTypes.STRING
    },
    idTarjetaDebito:{
        type: DataTypes.STRING
    }
}) 

Ingreso.belongsTo(Tarjeta_Debito, {
    foreignKey: 'idTarjetaDebito',
    targetId: 'idTarjetaDebito'
})

Tarjeta_Debito.hasMany(Ingreso, {
    foreignKey: 'idTarjetaDebito',
    sourceKey: 'idTarjetaDebito'
})

export default Ingreso;