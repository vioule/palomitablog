import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SafeLink from '../../../ReactRouterDom/SafeLink';

import Theme from '../../../../theme';
import Categorie, { StyledH3 } from './Categorie';

describe('<Categorie />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <Categorie categorie="MyCategorie" link="MyLink" />,
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
    expect(wrapper.find(StyledH3).length).toBe(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find(StyledH3).children().length).toBe(1);
    expect(wrapper.find(SafeLink).length).toBe(1);
    expect(wrapper.find(SafeLink).text()).toBe('MyCategorie');
    expect(wrapper.props().categorie).toBe('MyCategorie');
    expect(wrapper.find(SafeLink).props().to).toBe('/MyCategorie');
  });
});

describe('<StyledH3 />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <StyledH3 />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
    expect(wrapper).toHaveStyleRule('color', Theme.colors.normal, {
      modifier: 'a',
    });
    expect(wrapper).toHaveStyleRule('color', Theme.colors.dark, {
      modifier: 'a:hover',
    });
    expect(wrapper).toHaveStyleRule('font-size', '1rem');
    expect(wrapper).toHaveStyleRule('font-size', '.8rem', {
      media: Theme.medias.mobileM,
    });
  });
});
