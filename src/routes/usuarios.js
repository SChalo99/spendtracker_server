import express from 'express'
import UsuarioController from '../controllers/usuarioController.js'
import { authenticate } from '../middleware/authenticate.js'

const { findAll, create, update, remove, findOne } = UsuarioController

const router = express.Router()

//router.get("/", findAll)
router.post("/", create)
router.put("/", authenticate, update)
router.delete("/", authenticate, remove)
router.get("/", authenticate, findOne)

export default router;