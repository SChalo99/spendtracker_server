import express from 'express'
import Tarjeta_CreditoController from '../controllers/tarjeta_creditoController.js'
import { authenticate } from '../middleware/authenticate.js'

const { findAll, create, update, remove, findOne } = Tarjeta_CreditoController

const router = express.Router()

router.get("/", authenticate, findAll)
router.post("/",authenticate, create)
router.put("/", authenticate, update)
router.delete("/:id", authenticate, remove)
router.get("/:id", authenticate, findOne)

export default router;