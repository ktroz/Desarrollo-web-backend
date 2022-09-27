import Person from '../models/Person.model'

export default class PersonController {
	#model = new Person()

	create({person}){
		return this.#model.create(person)
	}
}