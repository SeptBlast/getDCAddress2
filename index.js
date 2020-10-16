const express = require('express')
const dotenv = require('dotenv')
const homeRoute = require('./Routes/home')
const citizenAtlasRoute = require('./Routes/CitizenAtlasRoute')

dotenv.config()

const app = express()

app.use(express.json())

app.use('/', homeRoute)
app.use('/citizenAtlas', citizenAtlasRoute)

app.listen(process.env.SERVICE_PORT, () => console.log('Server Up at localhost:' + process.env.SERVICE_PORT))