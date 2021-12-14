import salidaModel from '../models/salidaModel'

import * as apiResponse from '../helpers/apiResponse'
import * as helper from '../helpers/traits'

export const getSalidas = async (req, res) => {
    return res.json({'msg' : 'Welcome'})
}

export const addSalidas = async (req, res) => {

    try {

        if(!title) {
            res.json(apiResponse.voidRequiredField(helper.formatVoidFields(!nombre ? 'nombre' : '')))
        }

        const ingreso = new ingresoModel(req.body)
        await ingreso.save()

        res.json(apiResponse.successResponse(salidas))
    } catch (error) {
        res.json(apiResponse.errorResponse(error))
    }
}
