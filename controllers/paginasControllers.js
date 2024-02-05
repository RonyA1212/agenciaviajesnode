import { Viaje } from '../models/Viaje.js';
import { Testimoniales } from '../models/testimonial.js';

const paginaInicio = async (req, res) => {

    // Consultar 3 viajes del modelo viaje
    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );

    promiseDB.push( Testimoniales.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all( promiseDB );

        res.render('inicio',{
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error)
    }
    
}

const paginaNosotros = (req, res) =>{
    res.render('Nosotros',{
        pagina: 'Nosotros'
    })
}

const paginaViajes = async (req, res) =>{

    // Cosnultar la BDD

    const viajes = await Viaje.findAll();

    res.render('Viajes', {
        pagina: 'Proximos viajes',
        viajes
    })
}

const paginaTestimoniales = async (req, res) =>{
    try {
        const testimoniales = await Testimoniales.findAll();

        res.render('TEstimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        })

    } catch (error) {
        console.log(error)
    }
}

// Muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) =>{

    const { slug } = req.params;
    // console.log('nada    s',viaje)
    try {

        const viaje = await Viaje.findOne({
            where : { slug }
        })

        res.render('viaje',{
            pagina: 'Informacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error)
    }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
