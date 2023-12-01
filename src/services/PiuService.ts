/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import IPiu from 'interfaces/IPiu';
import IPiuLike from 'interfaces/IPiuLike';
import api from './api';

export default class PiuService {
    static async getPius(): Promise<IPiu[]> {
        const response: AxiosResponse<IPiu[]> = await api.get('/pius/');
        return response.data;
    }

    static async patchPiusLike(id: string): Promise<IPiuLike[]> {
        const response: AxiosResponse<IPiuLike[]> = await api.patch(
            `/pius/like/${id}`
        );
        return response.data;
    }

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
