import UsuariosRepository from "../repository/usuarioRepository.js";

const findAll = async (req, res) => {
    const result = await UsuariosRepository.findAll();

    return sendResponse(result, res);
}

const findOne = async (req, res, next) => {

    const id = req.uid;
    const result = await UsuariosRepository.findOne(id);
        
    return sendResponse(result, res);

   
}

const create = async (req, res) => {

    const result = await UsuariosRepository.create(req.body);

    return sendResponse(result, res);
}

const update = async (req,res) => {
    //req.body.idUsuario = req.uid;
    //console.log(req.body);
    const result = await UsuariosRepository.update(req.uid,req.body)

    return sendResponse(result, res);
}

const remove = async (req, res) => {

    const id = req.uid;

    const result = await UsuariosRepository.remove(id)

    return sendResponse(result, res);
}

const sendResponse = (result, res) => {
    if (result)
        return res.status(200).json(result);
    else
        return res.status(500).json({ message: 'Ha ocurrido un error'})
} 

const UsuarioController = { findAll, create, findOne, update, remove }

export default UsuarioController;