const express = require('express')
const router = express.Router()

const userController = require('../controllers/userController') 
// Route 는 오직 Controller 에만 의존 합니다.

router.post('/signin', userController.signIn) // '/products' 핸들링 하는 컨트롤러 함수

module.exports = router // 이렇게 내보내면 부모 router 에 자동으로 연결됩니다.