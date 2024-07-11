import Usuario from "../models/usuario.js";

const findAll = async () => {
    try {

        const result = await Usuario.findAll();
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (usuario) => {
    try {

        const newusuario = await Usuario.create(usuario);

        return newusuario;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idUsuario) => {
    try {
        return await Usuario.findOne({
            where: {
                idUsuario: idUsuario
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (idUsuario, usuario) => {
    try {
        const foundusuario =  await Usuario.findOne({
            where: {
                idUsuario: idUsuario
            }
        })

        foundusuario.set(usuario)

        foundusuario.save()

        return foundusuario;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (idUsuario) => {
    try {
        await Usuario.destroy({
            where: {
                idUsuario: idUsuario
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const UsuariosRepository = { findAll, create, findOne,update, remove };

export default UsuariosRepository; 
