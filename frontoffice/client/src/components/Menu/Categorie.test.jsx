import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import Categorie, { StyledLink } from './Categorie';

describe('<Categorie />', () => {
  it('should have correct props', () => {
    const wrapper = mount(
      <Categorie name="example" />,
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
    expect(wrapper.find('span').text()).toBe('example');
    const props = wrapper.find(StyledLink).props();
    expect(props.to).toBe('/example');
    expect(props.className).toBe('categorie');
    expect(props.name).toBe('example');
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
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
    expect(wrapper).toHaveStyleRule('font-family', Theme.fonts.special);
    expect(wrapper).toHaveStyleRule('color', Theme.colors.dark);
    expect(wrapper).toHaveStyleRule('text-shadow', `1px 1px 0 ${Theme.colors.white}`);
    expect(wrapper).toHaveStyleRule('color', Theme.colors.lighten, {
      modifier: ':after',
    });
    expect(wrapper).toHaveStyleRule('background-color', Theme.colors.dark, {
      modifier: ':after',
    });
  });
});
