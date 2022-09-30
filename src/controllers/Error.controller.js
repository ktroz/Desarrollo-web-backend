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
        EXIST: {
            code: 409,
            message: 'Conflict with state of the server'
        },
        INTERNAL_SERVER_ERROR: {
            code: 500,
            message: 'Internal Server Error'
        }
    }
    
    constructor(type = 'INTERNAL_SERVER_ERROR', message) {
        super(message)
        this.type = type
        message ? this.message = message : this.message = this.#errors[type].message
        this.code = this.#errors[type].code
    }
}