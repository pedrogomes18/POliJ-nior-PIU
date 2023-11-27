import axios from 'axios';
import { parseCookies } from 'nookies';

const api = axios.create({
    baseURL: 'https://piupiuwer.polijrinternal.com'
});

const { 'piupiuwer:token': token } = parseCookies();

if (token) {
    (api.defaults.headers as any).Authorization = `bearer ${token}`;
}

export default api;
