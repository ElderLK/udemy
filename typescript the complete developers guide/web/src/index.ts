import { Collection } from "./models/Collection";
import { User, UserProps } from "./models/User";
import { UserList } from "./views/UserList";

const users = new Collection<User, UserProps>('http://localhost:3000/users', (json: UserProps) => {
    return User.buildUser(json);
});

users.fetch();

users.on('change', () => {
    const root = document.getElementById('root');

    if(root) 
        new UserList(root, users).render();
    
})
