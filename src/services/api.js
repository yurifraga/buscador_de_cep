import axios from 'axios';

//https://viacep.com.br/ws/26070132/json

const api= axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;