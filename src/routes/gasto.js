import express from 'express'
import GastoController from '../controllers/gastoController.js'
import { authenticate } from '../middleware/authenticate.js'

const { findAll, findByTarjeta, create, update, remove, findOne, findByDate } = GastoController

const router = express.Router()

router.get("/", authenticate, findAll)
router.post("/",authenticate, create)
router.put("/", authenticate, update)
router.delete("/:id", authenticate, remove)
//router.get("/:id", authenticate, findOne)
router.get("/gastosPorTarjeta/:idTarjetaCredito", authenticate, findByTarjeta)
router.get("/gastos/fecha/:idTarjetaCredito/:date", authenticate, findByDate)

export default router;