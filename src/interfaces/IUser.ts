import IPiu from './IPiu';
import IPiuLike from './IPiuLike';

export default interface IUser {
    id: string;
    username: string;
    firstName: string;
    lastName: string;
    about: string;
    avatar: string;
    pius: IPiu[];
    likes: IPiuLike[];
    following: IUser[];
    followers: IUser[];
    favorites: IPiu[];
}
