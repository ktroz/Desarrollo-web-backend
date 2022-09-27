const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

import { postPerson } from './services/person.service'
//Nos permite aceptar JSON en el body de las peticiones
app.use(express.json({ limit: '25mb' }))

//Este es nuestro primer endpoint, el cual nos devolverá un mensaje de bienvenida.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/person', postPerson)

app.listen(process.env.PORT, () => {
  console.log(`App listening on port: ${process.env.PORT}`)
})