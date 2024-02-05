import { DataTypes } from "sequelize";
import db from '../config/db.js'

export const Testimoniales = db.define('testimoniales',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING(60)
    },
    correo: {
        type: DataTypes.STRING(60)
    },
    mensaje: {
        type: DataTypes.TEXT
    }
})
// await Testimoniales.sync();