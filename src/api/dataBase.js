import axios from "axios";





const getOptions = axios.create({
        baseURL: `http://localhost:8081/`,
}) 
console.log(process.env.DATA_BASE_URL);

export default getOptions;