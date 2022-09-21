const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

//Este es nuestro primer endpoint, el cual nos devolverá un mensaje de bienvenida.
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})