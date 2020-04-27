import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import Reducer from '../../store/reducers';
import Theme from '../../theme';
import { CategorieSide, LinkSide } from './Sides';
import ConnectMenu, { Nav, Menu } from './index';
import setMenu from '../../store/menu/actions';
import Categorie from './Categorie';
import { Contact } from './PageLink';
import { Instagram } from '../Socials';

const store = createStore(Reducer);

describe('<Menu />', () => {
  it('should have correct descendants', () => {
    const wrapper = shallow(<Menu />);
    expect(wrapper.find(Nav).length).toBe(1);
    const children = wrapper.children();
    expect(children.length).toBe(2);
    expect(children.at(0).type()).toBe(CategorieSide);
    expect(children.at(1).type()).toBe(LinkSide);
  });
  it('should handle onClick correctly', () => {
    const wrapper = mount(
      <ConnectMenu store={store} />,
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
    expect(wrapper.find(Menu).props().trigger).toBe(false);
    wrapper.find(Menu).simulate('click');
    expect(wrapper.find(Menu).props().trigger).toBe(false);
    wrapper.find(Categorie).at(0).simulate('click');
    expect(wrapper.find(Menu).props().trigger).toBe(true);
    wrapper.find(Contact).simulate('click');
    expect(wrapper.find(Menu).props().trigger).toBe(false);
    wrapper.find(Instagram).simulate('click');
    expect(wrapper.find(Menu).props().trigger).toBe(false);
    const props = wrapper.find(Menu).props();
    expect(props.setMenu(props.trigger)).toStrictEqual(setMenu(props.trigger));
  });
});

describe('<Nav />', () => {
  it('should have correct styles', () => {
    const wrapper = mount(
      <Nav />,
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
