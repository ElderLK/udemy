import { shallow, mount, render } from 'enzyme';
import React from 'react';
import CounterButton from './CounterButton';

it('Expect to render Card Component', () => {
    expect(shallow(<CounterButton  color="red"/>)).toMatchSnapshot();
})

it('correct increments the counter', () => {
    const mockColor = 'red';
    const wrapper = shallow(<CounterButton  color="red"/>);

    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('red');
})
