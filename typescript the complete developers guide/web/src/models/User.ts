import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';
import { ApiSync } from "./ApiSync";
import { Collection } from './Collection';

export interface UserProps {
    id?: number;
    name?: string; 
    age?: number;
}

export class User extends Model<UserProps> {

    // constructor(attrs: UserProps){
    //     super(new Attributes(attrs),  new Eventing(), new ApiSync<UserProps>('http://localhost:3000/users'));
    // }

    static buildUser(attrs: UserProps){
         return new User(new Attributes(attrs),  new Eventing(), new ApiSync<UserProps>('http://localhost:3000/users'));
    }

    static buildUserCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(
            'http://localhost:3000/users', 
            (json: UserProps) => User.buildUser(json)
        );
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age });
    }
}
