import express from 'express'
import dotenv from 'dotenv'
import mustache from 'mustache-express'
import path from 'path'
import mainRoutes from './routes/rotas'

dotenv.config()

//Configurações do servidor e do template engine
const server = express()

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

//essa linha de código é feita para que consigamos entregar arquivos estáticos no nosso servidor, como HTML, CSS, Javascript, imagens
server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes)

server.use((req, res) => {
  res.status(404).render('pages/404')
})

server.listen(process.env.PORT)