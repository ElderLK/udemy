import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';

it('Expect to render Card Component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'john',
            email: 'john@email.com'
        }
    ]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot();
})

