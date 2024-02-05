import { DataTypes } from 'sequelize';
import db from '../config/db.js';

export const Viaje = db.define('viajes',{
    titulo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    fecha_ida: {
        type: DataTypes.DATE
    },
    fecha_vuelta:{
        type: DataTypes.DATE
    },
    imagen: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    disponibles: DataTypes.STRING,
    slug: DataTypes.STRING
})