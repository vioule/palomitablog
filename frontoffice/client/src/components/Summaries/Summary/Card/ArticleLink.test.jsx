import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../../theme';
import ArticleLink, { StyledLink } from './ArticleLink';

describe('<ArticleLink />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <ArticleLink link="MyLink" />,
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
    expect(wrapper.find(StyledLink).length).toBe(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find(StyledLink).text()).toBe('Continuer de lire');
    expect(wrapper.find(StyledLink).props().to).toBe('MyLink');
    expect(wrapper.props().link).toBe('MyLink');
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
    expect(wrapper).toHaveStyleRule('align-self', 'start');
    expect(wrapper).toHaveStyleRule('font-weight', '300');
    expect(wrapper).toHaveStyleRule('font-family', Theme.fonts.special);
    expect(wrapper).toHaveStyleRule('color', Theme.colors.normal);
    expect(wrapper).toHaveStyleRule('font-size', '.8rem');
    expect(wrapper).toHaveStyleRule('font-style', 'italic');
    expect(wrapper).toHaveStyleRule('margin-top', '.5rem');
    expect(wrapper).toHaveStyleRule('color', Theme.colors.dark, {
      modifier: ':hover',
    });
  });
});
