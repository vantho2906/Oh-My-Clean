import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import routes from './routes/index.js'
import http from 'http'
import connectDB from './config/connectDB.js'
import { config } from "dotenv";

config();


const port = process.env.PORT || 8080
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true }));
app.use(helmet());

app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
})
app.use(routes)

const server = http.createServer(app)