const express = require('express')
const apiRouter = require('./routes/api-routes')
const cors = require('cors')
const server = express()
const PORT = process.env.PORT || 6969

server.use(express.json())
server.use(cors())
server.use('/api/posts', apiRouter)

server.get('/', (req, res) => res.send('API is RESTing'))

server.listen(8000, () =>
	console.log('***\nServer Reporting for duty on PORT ${PORT}***\n')
)
