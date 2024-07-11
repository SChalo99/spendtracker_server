import Tarjeta_Credito from '../models/tarjeta_credito.js';
import Tarjeta_Debito from '../models/tarjeta_debito.js';
import Ingreso from "../models/ingreso.js";
import { Op } from "sequelize";

const findAll = async () => {
    try {

        const result = await Ingreso.findAll({include: Tarjeta_Credito, include: Tarjeta_Debito});
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findByTarjeta = async (idTarjetaCredito) => {
    try {
      const gastos = await Ingreso.findAll({
        where: {
            [Op.or]:{
                idTarjetaCredito: idTarjetaCredito, 
                idTarjetaDebito: idTarjetaCredito, 
            }
        },
        include: Tarjeta_Credito,
        include: Tarjeta_Debito
      });
  
      return gastos;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

const create = async (ingreso) => {
    try {

        const newingreso = await Ingreso.create(ingreso);

        return newingreso;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idIngreso) => {
    try {
        return await Ingreso.findOne({
            where: {
                idIngreso
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (ingreso) => {
    try {
        const foundingreso =  await Ingreso.findOne({
            where: {
                idIngreso: ingreso.idIngreso
            }
        })

        foundingreso.set(ingreso)

        foundingreso.save(ingreso)

        return foundingreso;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Ingreso.destroy({
            where: {
                idIngreso:id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const IngresoRepository = { findAll, findByTarjeta, create, findOne,update, remove };

export default IngresoRepository;