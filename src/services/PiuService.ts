/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import IPiu from 'interfaces/IPiu';
import IPiuLike from 'interfaces/IPiuLike';
import api from './api';

export default class PiuService {
    // Pega todos os PIUS
    static async getPius(): Promise<IPiu[]> {
        const response: AxiosResponse<IPiu[]> = await api.get('/pius/');
        return response.data;
    }

    // Atualiza o Heart do PIU
    static async patchPiusLike(id: string): Promise<IPiuLike[]> {
        const response: AxiosResponse<IPiuLike[]> = await api.patch(
            `/pius/like/${id}`
        );
        return response.data;
    }

    // Cria os PIUS
    static async createPiu(text: string): Promise<IPiu> {
        try {
            const requestBody = JSON.stringify({ text });
            console.log(text, requestBody);

            const response: AxiosResponse<IPiu> = await api.post(
                '/pius',
                requestBody,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            console.log(text);

            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Pega os PIUS de cada usuário pelo ID
    static async getPiuById(id: string): Promise<IPiu[]> {
        try {
            const response = await this.getPius();
            const arrayPiusId: IPiu[] = [];

            response.forEach((element) => {
                if (element.user.id === id) {
                    arrayPiusId.push(element);
                }
            });

            return arrayPiusId;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    // Deleta os Pius do User pelo ID
    static async deletePiu(id: string): Promise<IPiu> {
        try {
            const response: AxiosResponse<IPiu> = await api.delete(
                `/pius/${id}`
            );
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
