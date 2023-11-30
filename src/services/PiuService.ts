import { AxiosResponse } from 'axios';
import IPiu from 'interfaces/IPiu';
import IPiuLike from 'interfaces/IPiuLike';
import api from './api';

interface IPiuResponse {
    piu: IPiu;
}

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

    static async createPiu(textPiu: string): Promise<IPiu> {
        try {
            const response: AxiosResponse<IPiuResponse> = await api.post(
                '/pius',
                {
                    textPiu
                }
            );
            return response.data.piu;
        } catch (error) {
            console.log(error);
            throw error; // Rejeitar a Promise para que a chamada do serviço saiba que houve um erro
        }
    }
}
