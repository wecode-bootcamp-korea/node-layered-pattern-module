const userService = require('../services/userService')

const signIn = async(req, res) => {
	try {
		const { email, password } = req.body // r, c, s, m // controllers
    const REQUIRED_KEYS = {email, password} 

		for (let key in REQUIRED_KEYS) {
			if (!REQUIRED_KEYS[key]) {
			  return res.status(400).json({ message: `KEY_ERROR: ${info}` })
			}
		} // controllers

		console.log('email in controller: ', email)

		const token = await userService.signIn(email, password)

		console.log('user in controller: ', token)

		return res.status(200).json({ message: 'LOGIN_SUCCESS', token })

	} catch (err) {
		console.log(err)
		return res.status(err.statusCode || 500).json({ message: err.message })
	}
}

module.exports = { signIn }