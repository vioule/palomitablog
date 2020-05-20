import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../../theme';
import Title, { H2 } from './Title';

describe('<Title />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <Title title="MyTitle" />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper.find(H2).length).toBe(1);
    expect(wrapper.children().length).toBe(1);
    expect(wrapper.find(H2).text()).toBe('MyTitle');
    expect(wrapper.props().title).toBe('MyTitle');
  });
});

describe('<H2 />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <H2 />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper).toHaveStyleRule('font-weight', '400');
    expect(wrapper).toHaveStyleRule('text-transform', 'uppercase');
    expect(wrapper).toHaveStyleRule('hyphens', 'auto');
    expect(wrapper).toHaveStyleRule('font-size', '2.5rem');
    expect(wrapper).toHaveStyleRule('font-size', '2rem', {
      media: Theme.medias.desktop,
    });
    expect(wrapper).toHaveStyleRule('font-size', '3rem', {
      media: Theme.medias.tablet,
    });
    expect(wrapper).toHaveStyleRule('font-size', '2rem', {
      media: Theme.medias.mobileM,
    });
    expect(wrapper).toHaveStyleRule('margin-top', '.5rem');
    expect(wrapper).toHaveStyleRule('margin-top', '.25rem', {
      media: Theme.medias.tablet,
    });
  });
});
