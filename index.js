import express, { json } from 'express'
import { config } from 'dotenv'
import cors from 'cors';
import homeRoute from './Routes/home.js'
import citizenAtlasRoute from './Routes/CitizenAtlasRoute.js'
import swaggerDoc from './config/swaggerDocs.js'

config()
const app = express()
const PORT = process.env.SERVICE_PORT || process.env.PORT || 80

app.use(json())
app.use(cors())

swaggerDoc(app)

app.use('/', homeRoute)
app.use('/citizenAtlas', citizenAtlasRoute)

app.listen(PORT, () => console.log('Server Up at localhost:' + PORT))