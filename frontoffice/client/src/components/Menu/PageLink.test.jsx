import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import { Contact, About, StyledLink } from './PageLink';

describe('<Contact />', () => {
  it('should have correct props', () => {
    const wrapper = mount(
      <Contact />,
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
    expect(wrapper.find('span').text()).toBe('Contact');
    const props = wrapper.find(StyledLink).props();
    expect(props.to).toBe('/contact');
    expect(props.className).toBe('pagelink');
    expect(props.name).toBe('Contact');
  });
});

describe('<About />', () => {
  it('should have correct props', () => {
    const wrapper = mount(
      <About />,
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
    expect(wrapper.find('span').text()).toBe('A propos');
    const props = wrapper.find(StyledLink).props();
    expect(props.to).toBe('/about');
    expect(props.className).toBe('pagelink');
    expect(props.name).toBe('A propos');
  });
});
describe('<StyledLink />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <StyledLink to="/" />,
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
    expect(wrapper).toHaveStyleRule('color', Theme.colors.black);
    expect(wrapper).toHaveStyleRule('font-family', Theme.fonts.special);
    expect(wrapper).toHaveStyleRule('color', Theme.colors.normal, {
      modifier: ':after',
    });
    expect(wrapper).toHaveStyleRule('background-color', Theme.colors.lighten, {
      modifier: ':after',
    });
  });
});
