import axios from "axios";
import { Global } from "@/Global";
import Cookies from 'cookies-js';

export default class CharlasService {
    getRondas() {
        return new Promise((resolve, reject) => {
            const endpoint = 'api/rondas/rondascurso';
            const token = Cookies.get('bearer_token');
            axios.get(
                Global.urlBase + endpoint,
                {
                    headers: {
                        Authorization: token, 
                    }
                }
            )
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                console.error("Error al obtener las rondas de charlas:':", error.response ? error.response.data : error);
                reject(error);
            });
        });
    }
}