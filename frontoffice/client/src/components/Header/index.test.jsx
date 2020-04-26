import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import Logo from './Logo';
import Hamburger from './Hamburger';
import Header, { StyledHeader } from './index';

describe('<Header />', () => {
  it('should have correct descendants', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(StyledHeader).length).toBe(1);
    const children = wrapper.children();
    expect(children.length).toBe(2);
    expect(children.at(0).type()).toBe(Logo);
    expect(children.at(1).type()).toBe(Hamburger);
  });
});

describe('<StyledHeader />', () => {
  it('should have correct styles', () => {
    const wrapper = mount(
      <StyledHeader />,
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
    expect(wrapper).toHaveStyleRule('position', 'fixed');
    expect(wrapper).toHaveStyleRule('z-index', '1001');
    expect(wrapper).toHaveStyleRule('height', '0');
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', '1920px');
    expect(wrapper).toHaveStyleRule('left', '50%');
    expect(wrapper).toHaveStyleRule('top', '0');
    expect(wrapper).toHaveStyleRule('transform', 'translateX(-50%)');
  });
});
