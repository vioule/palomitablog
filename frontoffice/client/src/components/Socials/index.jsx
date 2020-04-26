import styled from 'styled-components';

const React = require('react');

export const SocialLink = styled.a.attrs({ target: '_blank' })`
  color: ${({ theme }) => theme.colors.dark};
  display: inline-block;
  margin-right: 1rem;
  &:last-child {
    margin-right: 0;
  }
  &:after {
    content: '';
    display: block;
    position: absolute;
    left: 50%;
    bottom: -.25rem;
    width: 0;
    background-color: transparent;
    border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
    transition: width 250ms, left 250ms;
  }
  &:hover:after {
    width: 100%;
    left: 0;
  }
`;

export const Instagram = ({ className }) => (
  <SocialLink href="https://www.instagram.com/estellepalomita/" className={className}>
    Instagram
  </SocialLink>
);
export const Pinterest = ({ className }) => (
  <SocialLink href="https://www.pinterest.fr/EstellePalomita/" className={className}>
    Pinterest
  </SocialLink>
);
