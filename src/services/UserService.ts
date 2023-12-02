/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import User from 'interfaces/IUser';
import { setCookie, destroyCookie } from 'nookies';
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
    // LOga KKKKKKK
    static async login(data: ILoginRequest): Promise<ILoginResponse> {
        try {
            this.destroyCookies();
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

    // Destroi os COOKIS e Limpa o navegador
    static destroyCookies(): void {
        try {
            destroyCookie(undefined, '@piupiuwer:token');
            destroyCookie(undefined, '@piupiuwer:userId');
            localStorage.removeItem('userToken');
            localStorage.removeItem('userId');
            console.log('Cookies destruídos com sucesso.');
        } catch (error) {
            console.error('Erro ao destruir cookies:', error);
        }
    }

    // Pega o user pelo ID
    static async getUserById(id: string): Promise<User> {
        try {
            const response: AxiosResponse<User> = await api.get(`/users/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Desloga
    static logout(): void {
        try {
            this.destroyCookies();
            window.location.href = '/login';
        } catch (error) {
            console.error('Erro ao deslogar', error);
        }
    }
}
