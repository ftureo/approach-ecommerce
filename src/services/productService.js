// Va a intentar resolver las peticiones HTTP a FakeStoreAPI y pasarle la data a ProductListContainer

import api from "./api";
import constants from "../utils/constants";

// Necesitamos un método para obtener todos los productos

/**
 * @function getProducts
 * @description Obtiene todos los productos de la API de FakeStoreAPI
 * @returns {Promise} Retorna una promesa con la respuesta de la API
 */
export const getProducts = async () => {
    try {
        const response = await api.get(constants.ENDPOINT_PRODUCTS)

        // Axios devuelve la información dentro de una clave llamada "data"
        return response.data
    } catch (error) {
        console.log(error, {
            message: constants.INTERNAL_SERVER_ERROR
        })
        throw new Error({ message: constants.INTERNAL_SERVER_ERROR })
    }
}