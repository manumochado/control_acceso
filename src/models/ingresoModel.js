import {Schema, model} from 'mongoose';

const ingresoSchema = new Schema({
    indentificacion: {
        type: String,
        required: true,
        trim: true
    },
 
    fechaIngreso: {
        type: Date,
        required: false,
        trim: true
    },

    horaIngreso: {
        type: timestamps,
        required: true,
        trim: true
    },

    zonaAcceso: {
        type: String,
        required: true,
        default: false
    }
},{versionKey: false, timestamps: true});

export default model('ingresos', ingresoSchema);