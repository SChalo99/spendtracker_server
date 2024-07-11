import jwt from "jsonwebtoken"
import axios from 'axios'

async function validateAuthToken(token){
    var decoded = await jwt.decode(token, {complete: true});
    const url = "https://www.googleapis.com/robot/v1/metadata/x509/securetoken@system.gserviceaccount.com";
    var currentKey = {key:{}}; // almacenar la clave que brinda google
    const kid = decoded.header.kid; // para comparar la clave que brinda google
    const response = await axios.get(url).catch((error)=>console.error(error.response));
    currentKey.key = response.data; // almacenar clave respondida por google
    try{
        const tokenDecoded = jwt.verify(token, currentKey.key[kid], {
            algorithms: "RS256",
            audience: "spendtracker-app-30bbb",
            iss: "https://securetoken.google.com/spendtracker-app-30bbb",
        }); // verificar el json web token con nuestro firebase
        return tokenDecoded;
    }catch (error){
        console.log(error);
        return error
    }
}

const authenticate = async (req, res, next) => {
    const authorized = req.headers.authorization; //header Bearer: token
    if(!authorized){
        res.sendStatus(401);
    }else{
        const token = authorized.split(" ")[1]; // obtener token brindado en la authorization header
        try{
            const tokenDecoded = await validateAuthToken(token);// validad token 
            req.uid = tokenDecoded.sub;
            next();
        }catch(e){
            console.log(e);
            res.sendStatus(403);
        }
    }
}

export {authenticate};