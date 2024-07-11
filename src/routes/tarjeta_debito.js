import express from 'express'
import Tarjeta_DebitoController from '../controllers/tarjeta_debitoController.js'
import { authenticate } from '../middleware/authenticate.js'

const { findAll, create, update, remove, findOne } = Tarjeta_DebitoController

const router = express.Router()

router.get("/", authenticate, findAll)
router.post("/", authenticate, create)
router.put("/", authenticate, update)
router.delete("/:id", authenticate, remove)
router.get("/:id", authenticate, findOne)

export default router;