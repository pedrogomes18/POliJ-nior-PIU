import { AxiosResponse } from 'axios';
import User from 'interfaces/IUser';
import { setCookie, destroyCookie } from 'nookies'; // Importe destroyCookie também

import api from './api';

interface ILoginRequest {
    email: string;
    password: string;
}

interface ILoginResponse {
    token: string;
    user: User;
}

export default class UserService {
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        try {
            const response: AxiosResponse<ILoginResponse> = await api.post(
                '/sessions/login',
                data
            );

            setCookie(undefined, '@piupiuwer:token', response.data.token);
            setCookie(undefined, '@piupiuwer:userId', response.data.user.id);

            return response.data;
        } catch (error) {
            console.error('Erro durante o login:', error);
            throw error;
        }
    }

    static destroyCookies(): void {
        try {
            // Destrói os cookies
            destroyCookie(null, '@piupiuwer:token');
            destroyCookie(null, '@piupiuwer:userId');
            // Adicione outros cookies que deseja destruir

            console.log('Cookies destruídos com sucesso.');
        } catch (error) {
            console.error('Erro ao destruir cookies:', error);
        }
    }
}
