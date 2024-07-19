import axios from "axios";
import contants from "../utils/constants";

// Creamos una instancia de axios pasándole la baseURL y el content-type que va a tener por defecto

/**
 * @constant api
 * @description Creamos una instancia de axios pasándole la baseURL y el content-type que va a tener por defecto 
 */
const api = axios.create({
    baseURL: contants.BASE_URL_FAKESTOREAPI,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
})

export default api