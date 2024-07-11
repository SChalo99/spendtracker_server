import express from 'express'
import IngresoController from '../controllers/ingresoController.js'
import { authenticate } from '../middleware/authenticate.js'

const { findAll, findByTarjeta, create, update, remove, findOne } = IngresoController

const router = express.Router()

router.get("/", authenticate, findAll)
router.post("/",authenticate, create)
router.put("/", authenticate, update)
router.delete("/:id", authenticate, remove)
router.get("/:id", authenticate, findOne)
router.get("/ingresosPorTarjeta/:idTarjetaCredito", authenticate, findByTarjeta)

export default router;