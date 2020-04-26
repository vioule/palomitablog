import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import Theme from '../../theme';
import Hamburger, { Button } from './Hamburger';
import Reducer from '../../store/reducers';
import setMenu from '../../store/menu/actions';

const store = createStore(Reducer);

describe('<Hamburger />', () => {
  it('should have correct props and 3 div as children', () => {
    const wrapper = mount(
      <Hamburger store={store} />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper.find('div').length).toBe(3);
    expect(wrapper.find(Button).length).toBe(1);
    const props = wrapper.find(Hamburger).childAt(0).props();
    expect(props.trigger).toBe(false);
    expect(props.onClick(props.trigger)).toStrictEqual(setMenu(props.trigger));
  });
});

describe('<Button />', () => {
  it('should have the correct border and background-color', () => {
    const wrapper = mount(
      <Button />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper).toHaveStyleRule('background-color', 'transparent');
    expect(wrapper).toHaveStyleRule('border', `1px solid ${Theme.colors.black}`, {
      modifier: '&>div',
    });
  });
});
