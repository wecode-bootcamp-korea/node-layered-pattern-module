const prisma = require("./index")

const getUserByEmail = async (email) => {
	console.log('email in dao: ', email)
	const user = await prisma.$queryRaw`
	  SELECT email, password FROM users WHERE email = ${email}
	`
	console.log('user in dao: ', user)
	return user
}

module.exports = { getUserByEmail }