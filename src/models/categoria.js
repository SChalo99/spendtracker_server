import { DataTypes } from "sequelize"
import sequelize from '../config/database.js'

const Categoria = sequelize.define('categoria', {
    idCategoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreCategoria: {
        type:  DataTypes.STRING,
    }
}) 


export default Categoria;