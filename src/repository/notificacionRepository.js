import Tarjeta_Credito from '../models/tarjeta_credito.js';
import Tarjeta_Debito from '../models/tarjeta_debito.js';
import Notificacion from "../models/notificacion.js";

const findAll = async () => {
    try {

        const result = await Notificacion.findAll({include: Tarjeta_Credito, include: Tarjeta_Debito});
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (notificacion) => {
    try {

        const newnotificacion = await Notificacion.create(notificacion);

        return newnotificacion;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idNotificacion) => {
    try {
        return await Notificacion.findOne({
            where: {
                idNotificacion
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (notificacion) => {
    try {
        const foundnotificacion =  await Notificacion.findOne({
            where: {
                idNotificacion: notificacion.idNotificacion
            }
        })

        foundnotificacion.set(notificacion)

        foundnotificacion.save(notificacion)

        return foundnotificacion;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Notificacion.destroy({
            where: {
                idNotificacion:id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const NotificacionRepository = { findAll, create, findOne,update, remove };

export default NotificacionRepository;