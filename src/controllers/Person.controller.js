import Person from '../models/Person.model'
import ErrorController from './Error.controller'

export default class PersonController {
	#model = new Person()

	create({person}){
		//Esta parte solo es para ejemplificar cuando se lanze un error, como tal lo debemos configurar.
		throw new ErrorController()
		/**
		 * Codigo de ejemplo
		 * if(this.#model.findUnique(...)) {error}
		 */
		return this.#model.create(person)
	}
}