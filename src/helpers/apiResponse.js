export const doNotExitsResponse = () => {
    return {'msg' : 'error', 'error' : 'do_not_exits'}
}

export const successResponse = (data) => {
    return {'msg' : 'ok', 'data' : data}
}

export const errorResponse = (error) => {
    return {'msg' : 'error', 'error' : error}
}

export const voidRequiredField = (voidFields) => {
    return {'msg' : 'error', 'error' : 'void_required_field', 'void_required_field' : voidFields}
}