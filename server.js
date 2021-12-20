const http = require('http')
const express = require('express')
const { sendPosts, createProduct } = require('./postings')
const { signUp, signIn } = require('./users.js')
const { PrismaClient } = require('@prisma/client')
const routes = require('./routes')


const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {
  res.json({ message: '/ endpoint' })
})

console.log(signUp)
app.get('/products', sendPosts)
app.post('/products', createProduct)

const server = http.createServer(app)

const start = async () => {
  try {
    server.listen(8000, () => console.log('Server is listening on PORT 8000'))
  } catch (err) {
    console.log(err)
    await prisma.$disconnect()
  } 
}

start()