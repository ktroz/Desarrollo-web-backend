import Person from '../models/Person.model'
import ErrorController from './Error.controller'

export default class PersonController {
	#model = new Person()

	async create({person}){
		if(!person){
			throw new ErrorController('BAD_REQUEST')
		}
		const oldPerson = await this.#model.findUnique({ email: person.email })
		if(oldPerson){
			throw new ErrorController('EXIST', 'Person already exist')
		}
		return await this.#model.create(person)
	}
}