import ingresoModel from '../models/ingresoModel'

import * as apiResponse from '../helpers/apiResponse'
import * as helper from '../helpers/traits'

export const getIngresos = async (req, res) => {
    return res.json({'msg' : 'Welcome'})
}

export const addIngreso = async (req, res) => {

    try {

        if(!title) {
            res.json(apiResponse.voidRequiredField(helper.formatVoidFields(!nombre ? 'nombre' : '')))
        }

        const ingreso = new ingresoModel(req.body)
        await ingreso.save()

        res.json(apiResponse.successResponse(ingreso))
    } catch (error) {
        res.json(apiResponse.errorResponse(error))
    }
}