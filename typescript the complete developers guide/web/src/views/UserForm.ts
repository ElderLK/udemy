import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
 
    eventsMap() : { [key: string]: () => void } {
        return {
            'click:.set-age': this.onButtonSetAge,
            'click:.set-name': this.onButtonSetName,
            'click:.save-modal': this.onSaveClick,
        }
    }

    onButtonSetAge = (): void => {
        this.model.setRandomAge();
    }

    onSaveClick = (): void => {
        this.model.save();
    }

    onButtonSetName = (): void => {
        const input = this.parent.querySelector('input');
        if(input) {
            const name = input.value;
            this.model.set({ name })
        }
    }

    template(): string {
        return `
            <div>
                <input placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set Random Age</button>
                <button class="save-modal">Save User</button>
            </div>
        `;
    }

}