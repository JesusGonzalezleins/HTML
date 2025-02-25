const mensaje = require('../Models/mensajeModels');

//Aqui vamos a hacer la funcion que nos envie el mensaje como respuesta
const obtenerMensaje= (req,res)=>{

    res.json({mensaje})
};

module.exports={obtenerMensaje}
