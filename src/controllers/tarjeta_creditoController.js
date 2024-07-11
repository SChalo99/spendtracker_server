import Tarjetas_CreditoRepository from "../repository/tarjeta_creditoRepository.js";

const findAll = async (req, res) => {
    const result = await Tarjetas_CreditoRepository.findAll(req.uid);

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await Tarjetas_CreditoRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {
    req.body.idUsuario = req.uid;
    const result = await Tarjetas_CreditoRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await Tarjetas_CreditoRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await Tarjetas_CreditoRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const Tarjeta_CreditoController = { findAll, create, findOne, update, remove }

export default Tarjeta_CreditoController;