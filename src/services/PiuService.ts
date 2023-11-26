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
}
