import { PrismaClient } from '@prisma/client'

export default class Person {
	#client = new PrismaClient()['person']

	create(payload) {
		return this.#client.create({
			data : payload
		})
	}

	findUnique(query) {
		return this.#client.findUnique({
			where : query
		})
	}
}