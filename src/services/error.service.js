export const error = async (err, req, res, next) => {
    const { type, code, message } = err
    res.status(code).json({type, message})
    next()
}