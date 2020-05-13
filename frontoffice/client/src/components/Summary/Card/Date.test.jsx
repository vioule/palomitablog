import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../theme';
import Date, { Time } from './Date';

describe('<Date />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <Date date="2020-05-01T15:16:05.283Z" />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    const time = wrapper.find(Time);
    expect(time.length).toBe(1);
    expect(wrapper.children().length).toBe(1);
    expect(time.props().dateTime).toBe('2020-05-01');
    expect(time.text()).toBe('2020.05.01');
  });
});

describe('<Time />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <Time />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper).toHaveStyleRule('margin-top', '.5rem');
    expect(wrapper).toHaveStyleRule('line-height', '.8rem');
    expect(wrapper).toHaveStyleRule('font-size', '.8rem');
    expect(wrapper).toHaveStyleRule('font-family', Theme.fonts.special);
    expect(wrapper).toHaveStyleRule('color', Theme.colors.normal);
    expect(wrapper).toHaveStyleRule('text-align', 'right');
  });
});
