import PersonController from '../controllers/Person.controller'

const personController = new PersonController()

export const postPerson = async (req, res, next) => {
	res.locals.data = await personController.create(req.body)
    res.status(200).json({data: res.locals.data})
    next()
}