import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import Logo, { StyledSafeLink } from './Logo';

describe('<Logo />', () => {
  it('should render two links', () => {
    const wrapper = shallow(
      <Logo />,
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
    expect(wrapper.find('.desktop').text()).toBe('Palomita');
    expect(wrapper.find('.phone').text()).toBe('P.');
    expect(wrapper.find(StyledSafeLink).length).toBe(2);
    expect(wrapper.find(StyledSafeLink).get(0).props.to).toBe('/');
    expect(wrapper.find(StyledSafeLink).get(1).props.to).toBe('/');
  });
});
describe('<StyledLink />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <StyledSafeLink to="/" />,
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
  });
});
