import Tarjeta_Credito from '../models/tarjeta_credito.js';
import Tarjeta_Debito from '../models/tarjeta_debito.js';
import Gasto from "../models/gasto.js";
import { Op } from "sequelize";

const findAll = async () => {
    try {

        const result = await Gasto.findAll({include: Tarjeta_Credito, include: Tarjeta_Debito});
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
        
    }
}

  const findByTarjeta = async (idTarjetaCredito) => {
    try {
      const gastos = await Gasto.findAll({
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

  const findByDate = async (idTarjetaCredito, date) => {
    var date = new Date(date);
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0,23,59,59);
    try {
      const gastos = await Gasto.findAll({
        where: {
            [Op.or]:{
                idTarjetaCredito: idTarjetaCredito, 
                idTarjetaDebito: idTarjetaCredito, 
            },
            [Op.and]:{
                fecha: {[Op.gte]: firstDay}, 
                fecha: {[Op.lte]: lastDay}, 
            }
        },
      });
  
      return gastos;
    } catch (err) {
      console.error(err);
      return null;
    }
  };

const create = async (gasto) => {
    try {

        const newgasto = await Gasto.create(gasto);

        return newgasto;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idGasto) => {
    try {
        return await Gasto.findOne({
            where: {
                idGasto
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (gasto) => {
    try {
        const foundgasto =  await Gasto.findOne({
            where: {
                idGasto: gasto.idGasto
            }
        })

        foundgasto.set(gasto)

        foundgasto.save(gasto)

        return foundgasto;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Gasto.destroy({
            where: {
                idGasto:id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const GastoRepository = { findAll, findByTarjeta, create, findOne,update, remove, findByDate };

export default GastoRepository; 
