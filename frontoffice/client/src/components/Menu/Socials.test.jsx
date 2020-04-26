import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import Socials from './Socials';
import { Instagram, Pinterest } from '../Socials';

describe('<Socials />', () => {
  it('should have correct descendants', () => {
    const wrapper = mount(
      <Socials />,
      {
        wrappingComponent: ({ children }) => (
          <BrowserRouter>
            <ThemeProvider theme={Theme}>
              {children}
            </ThemeProvider>
          </BrowserRouter>
        ),
      },
    );
    expect(wrapper.find(Instagram).length).toBe(1);
    expect(wrapper.find(Pinterest).length).toBe(1);
    expect(wrapper.find(Instagram).props().className).toBe('social');
    expect(wrapper.find(Pinterest).props().className).toBe('social');
  });
});
