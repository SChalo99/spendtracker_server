
import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Usuario = sequelize.define('usuarios', {
    idUsuario: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    DNI: {
        type: DataTypes.STRING
    },
    edad: {
        type: DataTypes.INTEGER
    },
    genero: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },
    montoLimite:{
        type:DataTypes.DOUBLE
    },
    fcm: {
        type: DataTypes.STRING
    }
})



export default Usuario;