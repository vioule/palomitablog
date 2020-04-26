import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { createStore } from 'redux';
import Theme from '../../theme';
import Hamburger from './Hamburger';
import Reducer from '../../store/reducers';
import setMenu from '../../store/menu/actions';

const store = createStore(Reducer);

describe('<Hamburger />', () => {
  it('should render two links', () => {
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
    const props = wrapper.find(Hamburger).childAt(0).props();
    expect(props.trigger).toBe(false);
    expect(props.onClick(props.trigger)).toStrictEqual(setMenu(props.trigger));
  });
});
