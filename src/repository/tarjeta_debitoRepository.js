import Tarjeta_Debito from '../models/tarjeta_debito.js';
import Usuario from '../models/usuario.js';

const findAll = async (idUsuario) => {
    try {

        const result = await Tarjeta_Debito.findAll({include: Usuario, where: {
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

        const newtarjeta = await Tarjeta_Debito.create(tarjeta);

        return newtarjeta;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idTarjetaDebito) => {
    try {
        return await Tarjeta_Debito.findOne({
            where: {
                idTarjetaDebito
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
        const foundtarjeta =  await Tarjeta_Debito.findOne({
            where: {
                idTarjetaDebito: tarjeta.idTarjetaDebito
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

const remove = async (idTarjetaDebito) => {
    try {
        await Tarjeta_Debito.destroy({
            where: {
                idTarjetaDebito
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const Tarjetas_DebitoRepository = { findAll, create, findOne,update, remove };

export default Tarjetas_DebitoRepository; 
