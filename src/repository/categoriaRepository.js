import Categoria from "../models/categoria.js";

const findAll = async () => {
    try {

        const result = await Categoria.findAll();
        console.debug(result)

        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (categoria) => {
    try {

        const newcategoria = await Categoria.create(categoria);

        return newcategoria;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idCategoria) => {
    try {
        return await Categoria.findOne({
            where: {
                idCategoria
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (categoria) => {
    try {
        const foundcategoria =  await Categoria.findOne({
            where: {
                idCategoria: categoria.idCategoria
            }
        })

        foundcategoria.set(categoria)

        foundcategoria.save(categoria)

        return foundcategoria;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Categoria.destroy({
            where: {
                idCategoria:id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const CategoriaRepository = { findAll, create, findOne,update, remove };

export default CategoriaRepository; 
