require('dotenv').config()
require('./config/dataBase')

const express=require('express')
const app= express()

const PORT = 4000

app.set('port',PORT)

app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto: '+PORT)
})