import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import Theme from '../../../theme';
import Paragraph, { P } from './Paragraph';

describe('<Paragraph />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <Paragraph paragraph="MyParagraph" />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper.find(P).length).toBe(1);
    expect(wrapper.children().length).toBe(1);
    const { paragraph } = wrapper.props();
    expect(wrapper.find(P).props().dangerouslySetInnerHTML.__html).toBe(paragraph);
  });
});

describe('<P />', () => {
  it('should render styles correctly', () => {
    const wrapper = mount(
      <P />,
      {
        wrappingComponent: ({ children }) => (
          <ThemeProvider theme={Theme}>
            {children}
          </ThemeProvider>
        ),
      },
    );
    expect(wrapper).toHaveStyleRule('margin-top', '1rem');
    expect(wrapper).toHaveStyleRule('font-family', Theme.fonts.default);
    expect(wrapper).toHaveStyleRule('line-height', '1.25rem');
    expect(wrapper).toHaveStyleRule('max-height', '7.5rem');
    expect(wrapper).toHaveStyleRule('text-align', 'justify');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden');
    expect(wrapper).toHaveStyleRule('text-overflow', 'ellipsis');
    expect(wrapper).toHaveStyleRule('max-height', '9rem', {
      media: Theme.medias.desktop,
    });
    expect(wrapper).toHaveStyleRule('content', '""', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('position', 'absolute', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('bottom', '0', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('right', '0', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('width', '100%', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('height', '100%', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('background', 'linear-gradient(to bottom,rgba(255,255,255,0),rgba(255,255,255,1) 100%)', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('right', '0', { modifier: ':after' });
    expect(wrapper).toHaveStyleRule('content', '\' \'', {
      modifier: 'br',
    });
    expect(wrapper).toHaveStyleRule('content', '\' \'', {
      modifier: 'br:after',
    });
  });
});
