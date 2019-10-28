import axios from 'axios';

const api = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3abbb8d2-dc2c-440d-9066-f33be9428980"
    },
    withCredentials: true
});

export default api;