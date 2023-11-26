import IPiu from './IPiu';
import IUser from './IUser';

export default interface IPiuLike {
    id: string;
    user: IUser;
    piu: IPiu;
}
