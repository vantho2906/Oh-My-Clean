import { Router } from "express";
import about from './about.js'

const routes = Router()

routes.use('/',about)

export default routes;