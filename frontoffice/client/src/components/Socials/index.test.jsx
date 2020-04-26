import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import { SocialLink, Instagram, Pinterest } from './index';

describe('<Instagram />', () => {
  it('should have correct props and text', () => {
    const wrapper = mount(
      <Instagram className="example" />,
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
    expect(wrapper.find(SocialLink).text()).toBe('Instagram');
    expect(wrapper.find('a').props().target).toBe('_blank');
    const props = wrapper.find(SocialLink).props();
    expect(props.href).toBe('https://www.instagram.com/estellepalomita/');
    expect(props.className).toBe('example');
  });
});

describe('<Pinterest />', () => {
  it('should have correct props and text', () => {
    const wrapper = mount(
      <Pinterest className="example" />,
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
    expect(wrapper.find(SocialLink).text()).toBe('Pinterest');
    expect(wrapper.find('a').props().target).toBe('_blank');
    const props = wrapper.find(SocialLink).props();
    expect(props.href).toBe('https://www.pinterest.fr/EstellePalomita/');
    expect(props.className).toBe('example');
  });
});

describe('<SocialLink />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <SocialLink to="/" />,
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
    expect(wrapper).toHaveStyleRule('color', Theme.colors.dark);
    expect(wrapper).toHaveStyleRule('border-bottom', `1px solid ${Theme.colors.dark}`, {
      modifier: ':after',
    });
  });
});
