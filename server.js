require('dotenv').config()
require('./config/dataBase')

const express=require('express')
const Router = require('./routes/routes')
const cors = require('cors')
const PORT = 4000

const app= express()


app.use(cors())
app.use(express.json())
app.use('/api', Router)




app.listen(PORT, () => {
    console.log('Servidor corriendo en puerto: '+PORT)
})