import {Schema, model} from 'mongoose';

const estudianteSchema = new Schema({
    indentificacion: {
        type: String,
        required: true,
        trim: true
    },
    
    nombre: {
        type: String,
        required: true,
        trim: true
    },

    fechaNacimiento: {
        type: Date,
        required: false,
        trim: true
    },

    gradoActual: {
        type: null,
        required: true,
        trim: true
    },

    done: {
        type: Boolean,
        default: false
    }
},{versionKey: false, timestamps: true});

export default model('estudiantes', estudianteSchema);