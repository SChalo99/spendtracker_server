import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'
import Tarjeta_Credito from "./tarjeta_credito.js"
import Tarjeta_Debito from "./tarjeta_debito.js"

const Notificacion = sequelize.define('notificaciones', {
    idNotificacion: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    asunto: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    fecha: {
        type: DataTypes.DATE
    },
    hora: {
        type: DataTypes.DATE
    },
    idTarjetaCredito:{
        type: DataTypes.STRING
    },
    idTarjetaDebito:{
        type: DataTypes.STRING
    }
}) 

Notificacion.belongsTo(Tarjeta_Credito, {
    foreignKey: 'idTarjetaCredito',
    targetId: 'idTarjetaCredito'
})

Tarjeta_Credito.hasMany(Notificacion, {
    foreignKey: 'idTarjetaCredito',
    sourceKey: 'idTarjetaCredito'
})

Notificacion.belongsTo(Tarjeta_Debito, {
    foreignKey: 'idTarjetaDebito',
    targetId: 'idTarjetaDebito'
})

Tarjeta_Debito.hasMany(Notificacion, {
    foreignKey: 'idTarjetaDebito',
    sourceKey: 'idTarjetaDebito'
})


export default Notificacion;