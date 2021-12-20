const userDao = require('../models/userDao')

const signIn = async (email, password) => {
	console.log('email in services: ', email)
	
	const [user] = await userDao.getUserByEmail(email)

	console.log('user in service: ', user)

	if (!user) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}

	if (user.password !== password) {
		const error = new Error ('INVALID_USER')
		error.statusCode = 400

		throw error
	}

	const token = '1111'

	return token
}

module.exports = { signIn }