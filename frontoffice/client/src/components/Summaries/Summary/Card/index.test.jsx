import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from '../../../../theme';
import Card, { Div } from './index';
import Date from './Date';
import ArticleLink from './ArticleLink';
import Title from './Title';
import Paragraph from './Paragraph';
import Categorie from './Categorie';

describe('<Card />', () => {
  it('should have correct descendants and props', () => {
    const wrapper = mount(
      <Card
        categorie="MyCategorie"
        title="MyTitle"
        date="MyDate"
        paragraph="MyParagraph"
        reverse
      />,
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
    const children = wrapper.find('div').children();
    expect(children.length).toBe(5);
    expect(children.at(0).type()).toBe(Categorie);
    expect(children.at(1).type()).toBe(Title);
    expect(children.at(2).type()).toBe(Paragraph);
    expect(children.at(3).type()).toBe(ArticleLink);
    expect(children.at(4).type()).toBe(Date);
    const {
      categorie, title, date, paragraph, reverse,
    } = wrapper.props();
    expect(children.at(0).props().categorie).toBe(categorie);
    expect(children.at(1).props().title).toBe(title);
    expect(children.at(2).props().paragraph).toBe(paragraph);
    expect(children.at(4).props().date).toBe(date);
    expect(wrapper.find(Div).props().reverse).toBe(reverse);
  });
});

describe('<Div />', () => {
  it('should render styles correctly with reverse', () => {
    const wrapper = mount(
      <Div reverse />,
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
    expect(wrapper).toHaveStyleRule('width', '40%');
    expect(wrapper).toHaveStyleRule('color', Theme.colors.black);
    expect(wrapper).toHaveStyleRule('align-self', 'stretch');
    expect(wrapper).toHaveStyleRule('display', 'flex');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
    expect(wrapper).toHaveStyleRule('flex-direction', 'column');
    expect(wrapper).toHaveStyleRule('position', 'relative', { media: Theme.medias.tablet });
    expect(wrapper).toHaveStyleRule('width', '100%', { media: Theme.medias.tablet });
    expect(wrapper).toHaveStyleRule('padding-right', '.5rem', { media: Theme.medias.tablet });
    expect(wrapper).toHaveStyleRule('padding-left', '.5rem', { media: Theme.medias.tablet });
    expect(wrapper).toHaveStyleRule('margin-bottom', '1rem', { media: Theme.medias.tablet });
    expect(wrapper).toHaveStyleRule('padding-left', '5rem');
    expect(wrapper).toHaveStyleRule('padding-right', '0');
    expect(wrapper).toHaveStyleRule('padding-left', '2.5rem', { media: Theme.medias.desktop });
    expect(wrapper).toHaveStyleRule('padding-right', '0', { media: Theme.medias.desktop });
  });

  it('should render styles correctly without reverse', () => {
    const wrapper = mount(
      <Div reverse={false} />,
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
    expect(wrapper).toHaveStyleRule('padding-left', '0');
    expect(wrapper).toHaveStyleRule('padding-right', '5rem');
    expect(wrapper).toHaveStyleRule('padding-left', '0', { media: Theme.medias.desktop });
    expect(wrapper).toHaveStyleRule('padding-right', '2.5rem', { media: Theme.medias.desktop });
  });
});
