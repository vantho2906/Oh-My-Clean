import { Router } from "express";

const routes = Router();
routes.get('/about',(req,res) => {
  res.status(200).send('oke con de nha')
})

export default routes;