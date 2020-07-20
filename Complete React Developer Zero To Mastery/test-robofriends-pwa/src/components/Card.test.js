import { shallow, mount, render } from 'enzyme';
import React from 'react';
import Card from './Card';

it('Expect to render Card Component to be equal', () => {
    expect(shallow(<Card />).length).toEqual(1);
})

it('Expect to render Card Component', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
})

