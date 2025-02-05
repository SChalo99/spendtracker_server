import NotificacionRepository from "../repository/notificacionRepository.js";

const findAll = async (req, res) => {
    const result = await NotificacionRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await NotificacionRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await NotificacionRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await NotificacionRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await NotificacionRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const NotificacionController = { findAll, create, findOne, update, remove }

export default NotificacionController;