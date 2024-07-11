import IngresoRepository from "../repository/ingresoRepository.js";

const findAll = async (req, res) => {
    const result = await IngresoRepository.findAll();

    return sendResponse(result, res);
}

const findByTarjeta = async (req, res) => {
    const id = req.params.idTarjetaCredito;
    const result = await IngresoRepository.findByTarjeta(id);

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await IngresoRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await IngresoRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await IngresoRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await IngresoRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const IngresoController = { findAll, findByTarjeta, create, findOne, update, remove }

export default IngresoController;