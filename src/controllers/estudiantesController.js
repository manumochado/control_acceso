import estudianteModel from '../models/estudianteModel'

import * as apiResponse from '../helpers/apiResponse'
import * as helper from '../helpers/traits'

export const getEstudiantes = async (req, res) => {
    return res.json({'msg' : 'Welcome'})
}

export const addEstudiante = async (req, res) => {

    try {
        const {nombre} = req.body

        if(!title) {
            res.json(apiResponse.voidRequiredField(helper.formatVoidFields(!nombre ? 'nombre' : '')))
        }

        const estudiante = new estudianteModel(req.body)
        await estudiante.save()

        res.json(apiResponse.successResponse(estudiante))
    } catch (error) {
        res.json(apiResponse.errorResponse(error))
    }
}