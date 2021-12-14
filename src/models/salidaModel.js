import {Schema, model} from 'mongoose';

const salidaSchema = new Schema({
    indentificacion: {
        type: String,
        required: true,
        trim: true
    },
 
    fechaSalidad: {
        type: Date,
        required: false,
        trim: true
    },

    horasalida: {
        type: timestamps,
        required: true,
        trim: true
    },

    zonaSalida: {
        type: String,
        required: true,
        default: false
    }
},{versionKey: false, timestamps: true});

export default model('salidas', salidaSchema);