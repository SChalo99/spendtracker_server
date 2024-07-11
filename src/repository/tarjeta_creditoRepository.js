import Tarjeta_Credito from '../models/tarjeta_credito.js';
import Usuario from '../models/usuario.js';

const findAll = async (idUsuario) => {
    try {

        const result = await Tarjeta_Credito.findAll({include: Usuario, where: {
            idUsuario: idUsuario,
        }});
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (tarjeta) => {
    try {

        const newtarjeta = await Tarjeta_Credito.create(tarjeta);

        return newtarjeta;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idTarjetaCredito) => {
    try {
        return await Tarjeta_Credito.findOne({
            where: {
                idTarjetaCredito
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (tarjeta) => {
    try {
        const foundtarjeta =  await Tarjeta_Credito.findOne({
            where: {
                idTarjetaCredito: tarjeta.idTarjetaCredito
            }
        })

        foundtarjeta.set(tarjeta)

        foundtarjeta.save(tarjeta)

        return foundtarjeta;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (idTarjeta) => {
    try {
        await Tarjeta_Credito.destroy({
            where: {
                idTarjetaCredito:idTarjeta
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const Tarjetas_CreditoRepository = { findAll, create, findOne,update, remove };

export default Tarjetas_CreditoRepository; 
