import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('rend un h1 rouge avec le bon texte', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Bonjour, vous êtes sur l\'application backoffice de Palomita Blog.');
    expect(wrapper.find('h1')).toHaveStyleRule('color', 'red');
  });
});
