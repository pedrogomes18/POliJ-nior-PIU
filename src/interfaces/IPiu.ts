import IPiuLike from './IPiuLike';
import IUser from './IUser';

export default interface IPiu {
    id: string;
    user: IUser;
    likes: IPiuLike[];
    text: string;
    createdAt: Date;
    updatedAt: Date;
}
