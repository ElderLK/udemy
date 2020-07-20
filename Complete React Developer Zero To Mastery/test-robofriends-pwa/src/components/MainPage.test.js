import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

// redux-mock-store

let wrapper;
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(< MainPage {...mockProps }/>)
})

it('renders MainPage', () => {
    expect(wrapper).toMatchSnapshot();
})

it('filters robots correctly', () => {
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'John',
            email: 'john@email.com'
        }],
        searchField: 'john',
        isPending: false
    }
    const wrapper2 = shallow(< MainPage {...mockProps2 }/>)
    // expect(wrapper2.instance().filterRobots()).toEqual([]);
    expect(wrapper2.instance().filterRobots()).toEqual([{
        id: 1,
        name: 'John',
        email: 'john@email.com'
    }]);
})
