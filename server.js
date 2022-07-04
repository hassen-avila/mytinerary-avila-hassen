require('dotenv').config()
require('./config/dataBase')
require('./config/passport')

const express=require('express')
const Router = require('./routes/routes')
const cors = require('cors')
const PORT = 4000
const passport = require('passport')
const app= express()


app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api', Router)




app.listen(PORT, () => {
    console.log('Server running on port: '+PORT+' :)')
})