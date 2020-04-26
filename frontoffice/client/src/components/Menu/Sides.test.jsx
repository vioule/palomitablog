import React from 'react';
import { mount, shallow } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../theme';
import {
  CategorieSide, LinkSide, Side, ColorSide,
} from './Sides';
import Categorie from './Categorie';
import Socials from './Socials';
import { About, Contact } from './PageLink';

describe('<CategorieSide />', () => {
  it('should have correct descendants', () => {
    const wrapper = shallow(<CategorieSide />);
    expect(wrapper.find(ColorSide).length).toBe(1);
    expect(wrapper.children().length).toBe(4);
    const Categories = wrapper.find(Categorie);
    expect(Categories.length).toBe(4);
    const categories = ['deco', 'style', 'cuisine', 'voyages'];
    for (let i = 0; i < categories.length; i += 1) {
      expect(Categories.at(i).props().name).toBe(categories[i]);
    }
  });
});

describe('<LinkSide />', () => {
  it('should have correct descendants', () => {
    const wrapper = shallow(<LinkSide />);
    expect(wrapper.find(Side).length).toBe(1);
    const children = wrapper.children();
    expect(children.length).toBe(3);
    expect(children.at(0).type()).toBe(Contact);
    expect(children.at(1).type()).toBe(About);
    expect(children.at(2).type()).toBe(Socials);
  });
});

describe('<ColorSide />', () => {
  it('should have correct styles', () => {
    const wrapper = mount(
      <ColorSide />,
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
    expect(wrapper).toHaveStyleRule('background-color', Theme.colors.lighten);
    expect(wrapper).toHaveStyleRule('border-right', `1px solid ${Theme.colors.normal}`);
    expect(wrapper).toHaveStyleRule('border-right', 'none', {
      media: Theme.medias.portrait,
    });
    expect(wrapper).toHaveStyleRule('border-bottom', `1px solid ${Theme.colors.normal}`, {
      media: Theme.medias.portrait,
    });
    expect(wrapper).toHaveStyleRule('width', '50%');
    expect(wrapper).toHaveStyleRule('height', '100%');
    expect(wrapper).toHaveStyleRule('width', '100%', {
      media: Theme.medias.portrait,
    });
  });
});
describe('<Side />', () => {
  it('should have correct styles', () => {
    const wrapper = mount(
      <Side />,
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
    expect(wrapper).toHaveStyleRule('width', '50%');
    expect(wrapper).toHaveStyleRule('height', '100%');
    expect(wrapper).toHaveStyleRule('width', '100%', {
      media: Theme.medias.portrait,
    });
  });
});
