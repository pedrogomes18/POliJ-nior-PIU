/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import User from 'interfaces/IUser';
import { setCookie, destroyCookie } from 'nookies';
import router from 'next/router';
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
            window.location.href = '/index';
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
            destroyCookie(undefined, '@piupiuwer:token', '');
            destroyCookie(undefined, '@piupiuwer:userId', '');
            console.log('Cookies destruídos com sucesso.');
        } catch (error) {
            console.error('Erro ao destruir cookies:', error);
        }
    }

    static logout(): void {
        try {
            this.destroyCookies();
            localStorage.removeItem('userToken');
            localStorage.removeItem('userId');
            router.push('/login');
        } catch (error) {
            console.error('Erro ao deslogar', error);
        }
    }
}
