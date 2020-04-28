import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Reducer from '../../store/reducers';
import Theme from '../../theme';
import { CategorieSide, LinkSide } from './Sides';
import Menu, { StyledNav, Nav } from './index';
import setMenu from '../../store/menu/actions';
import Categorie from './Categorie';
import { Contact } from './PageLink';
import { Instagram } from '../Socials';

const store = createStore(Reducer);

describe('<Nav />', () => {
  it('should have correct descendants', () => {
    const wrapper = shallow(<Nav />);
    expect(wrapper.find(StyledNav).length).toBe(1);
    const children = wrapper.children();
    expect(children.length).toBe(2);
    expect(children.at(0).type()).toBe(CategorieSide);
    expect(children.at(1).type()).toBe(LinkSide);
  });
  it('should handle onClick correctly', () => {
    const wrapper = mount(
      <Menu store={store} />,
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
    expect(wrapper.find(Nav).props().trigger).toBe(false);
    wrapper.find(Nav).simulate('click');
    expect(wrapper.find(Nav).props().trigger).toBe(false);
    wrapper.find(Categorie).at(0).simulate('click');
    expect(wrapper.find(Nav).props().trigger).toBe(true);
    wrapper.find(Contact).simulate('click');
    expect(wrapper.find(Nav).props().trigger).toBe(false);
    wrapper.find(Instagram).simulate('click');
    expect(wrapper.find(Nav).props().trigger).toBe(false);
    const props = wrapper.find(Nav).props();
    expect(props.setMenu(props.trigger)).toStrictEqual(setMenu(props.trigger));
  });
});

describe('<StyledNav />', () => {
  it('should have correct styles', () => {
    const wrapper = mount(
      <StyledNav />,
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
    expect(wrapper).toHaveStyleRule('z-index', '1000');
    expect(wrapper).toHaveStyleRule('height', '100vh');
    expect(wrapper).toHaveStyleRule('width', '100%');
    expect(wrapper).toHaveStyleRule('max-width', '1920px');
    expect(wrapper).toHaveStyleRule('left', '50%');
    expect(wrapper).toHaveStyleRule('top', '0');
    expect(wrapper).toHaveStyleRule('transform', 'translateX(-50%)');
    expect(wrapper).toHaveStyleRule('background-color', 'white');
  });
});
