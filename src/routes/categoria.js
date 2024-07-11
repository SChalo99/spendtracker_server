import express from 'express'
import CategoriaController from '../controllers/categoriaController.js'

const { findAll, create, update, remove, findOne } = CategoriaController;

const router = express.Router()

router.get("/", findAll)

export default router;