export const valEx = () => {
    
}

export const formatVoidFields = (data) => {

    const formatData = []

    data.map((item) => {
        if(item != ''){
            formatData.push(item)
        }
    })

    return formatData
}

export const getPaginate = (currentPage, numDocuments) => {
    return {page: currentPage ? currentPage : 1, documents: numDocuments ? numDocuments : 2}
}