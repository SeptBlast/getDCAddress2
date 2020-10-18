const express = require('express')
const dotenv = require('dotenv')
const homeRoute = require('./Routes/home')
const citizenAtlasRoute = require('./Routes/CitizenAtlasRoute')

dotenv.config()

const PORT = process.env.SERVICE_PORT || 80

const app = express()

app.use(express.json())

app.use('/', homeRoute)
app.use('/citizenAtlas', citizenAtlasRoute)

app.listen(PORT, () => console.log('Server Up at localhost:' + PORT))