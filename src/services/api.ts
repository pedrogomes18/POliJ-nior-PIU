import axios, { AxiosInstance } from 'axios';
import { parseCookies } from 'nookies';

const createApi = (): AxiosInstance => {
    const api = axios.create({
        baseURL: 'https://piupiuwer.polijrinternal.com'
    });
    const { '@piupiuwer:token': token } = parseCookies();

    if (token) {
        // eslint-disable-next-line dot-notation, @typescript-eslint/no-explicit-any
        (api.defaults.headers as any).Authorization = `Bearer ${token}`;
    }

    /* api.defaults.headers.common = {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDExMDU1MjYsImV4cCI6MTcwMTE5MTkyNiwic3ViIjoiNzM3M2Q3ZmMtZWMzMC00MDkxLTg3MWUtZDVmNzkwODIxMzcwIn0.z3Qt3kUGrMqP3dTjeE2xthfkytpHnXeZk6Yei7VGjos`
    };
 */
    return api;
};

const api = createApi();

export default api;
