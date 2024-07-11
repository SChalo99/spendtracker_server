import CategoriaRepository from "../repository/categoriaRepository.js";

const findAll = async (req, res) => {
    const result = await CategoriaRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res) => {
    const id = req.params.id;
    const result = await CategoriaRepository.findOne(id);

    return sendResponse(result, res);
}

const create = async (req, res) => {

    const result = await CategoriaRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    const result = await CategoriaRepository.update(req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.params.id;

    const result = await CategoriaRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const CategoriaController = { findAll, create, findOne, update, remove }

export default CategoriaController;