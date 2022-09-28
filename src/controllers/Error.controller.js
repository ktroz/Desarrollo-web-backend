export default class ErrorController extends Error{
    // este es un objeto que contiene los errores que se pueden presentar en la aplicación
    #errors = {
        BAD_REQUEST: {
            code: 400,
            message: 'Bad Request'
        },
        UNAUTHORIZED: {
            code: 401,
            message: 'Unauthorized'
        },
        NOT_FOUND: {
            code: 404,
            message: 'Not Found'
        },
        INTERNAL_SERVER_ERROR: {
            code: 500,
            message: 'Internal Server Error'
        }
    }
    
    constructor(type = 'INTERNAL_SERVER_ERROR', message) {
        super(message)
        this.message = this.#errors[type].message
        this.code = this.#errors[type].code
    }
}