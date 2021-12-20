const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient({log: ['query']})

const signUp = async(req, res) => {
	try {
		const { email, password } = req.body
    const REQUIRED_KEYS = {email, password}

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
			  return res.status(400).json({ message: `KEY_ERROR: ${info}` })
			}
		}

		const createdUser = await prisma.$queryRaw`
		  INSERT INTO users(email, password) VALUES (${email}, ${password});
		`
		return res.status(201).json()
	} catch (err) {
		if (err.meta.code === '1062') {
			return res.status(409).json({ message: 'EXISTING_USER'})
		}
		console.log(err)
		return res.status(500).json({ message: err.message })
	}
}

const signIn = async(req, res) => {
	try {
		const { email, password } = req.body // r, c, s, m // controllers
    const REQUIRED_KEYS = {email, password} 

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
			  return res.status(400).json({ message: `KEY_ERROR: ${info}` })
			}
		} // controllers

		const [user] = await prisma.$queryRaw`
		  SELECT id, email, password FROM users WHERE email = ${email};
		` // models
		console.log('user: ', user)

		if (!user) {
			return res.status(400).json({ message: 'INVALID_USER' })
		}

		if (user.password !== password) {
			return res.status(400).json({ message: 'INVALID_USER' })
		}

		return res.status(200).json({ message: 'LOGIN_SUCCESS' }) // controller
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: err.message })
	}
}

module.exports = { signUp, signIn }