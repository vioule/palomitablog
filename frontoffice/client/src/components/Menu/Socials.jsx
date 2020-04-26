import styled from 'styled-components';
import { Instagram, Pinterest } from '../Socials';
import { SocialsLayout } from './styled-components/layout';

const React = require('react');

const Socials = styled.div`
  ${SocialsLayout};
`;

export default () => (
  <Socials>
    <Instagram className="social" />
    <Pinterest className="social" />
  </Socials>
);
