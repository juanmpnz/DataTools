import axios from "axios"

export function addClient(cliente){
    return axios.post("/api/clientes/add", cliente)
    .then(()=> console.log("Cliente guardao satifactoriamente"))
    .catch((err) =>err)
}