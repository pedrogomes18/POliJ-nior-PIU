import axios from 'axios';

const api = axios.create({
    baseURL: 'https://piupiuwer.polijrinternal.com'
});

api.defaults.headers.common = {
    Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDEwMzM5ODEsImV4cCI6MTcwMTEyMDM4MSwic3ViIjoiNzM3M2Q3ZmMtZWMzMC00MDkxLTg3MWUtZDVmNzkwODIxMzcwIn0.Lb17NDffV7qOpodUflT7BpVqe7Q5J7KXlIE27nj4bdU'
};

export default api;
