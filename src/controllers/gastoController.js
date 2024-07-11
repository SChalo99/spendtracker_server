import GastoRepository from "../repository/gastoRepository.js";

const findAll = async (req, res) => {
    const result = await GastoRepository.findAll();

    return sendResponse(result, res);
}

const findByTarjeta = async (req, res) => {
    const id = req.params.idTarjetaCredito;
    const result = await GastoRepository.findByTarjeta(id);

    return sendResponse(result, res);
}

const findByDate = async (req, res) => {
    const id = req.params.idTarjetaCredito;
    const date = req.params.date;
    const result = await GastoRepository.findByDate(id, date);

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await GastoRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await GastoRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await GastoRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await GastoRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const GastoController = { findAll, findByTarjeta, findByDate ,create, findOne, update, remove }

export default GastoController;