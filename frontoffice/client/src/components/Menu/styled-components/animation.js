import { css } from 'styled-components';

export default css`
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 1s 1.2s, visibility 0s 2.2s;
  & .categorie, & .pagelink, & .social {
    opacity: 0;
    top: 10rem;
    transition: top 1s 0s, opacity 1s 0s cubic-bezier(.23, 1.25, .46, 1);
  };
  & .categorie:nth-child(1) {
    transition-delay: 0.7s;
  };
  & .categorie:nth-child(2) {
    transition-delay: 0.6s;
  };
  & .categorie:nth-child(3) {
    transition-delay: 0.5s;
  };
  & .categorie:nth-child(4) {
    transition-delay: 0.4s;
  };
  & .pagelink:nth-child(1) {
    transition-delay: 0.3s;
  };
  & .pagelink:nth-child(2) {
    transition-delay: 0.2s;
  };
  & .social:nth-child(1) {
    transition-delay: 0.1s;
  };
  
  ${({ trigger }) => (trigger && css`
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transition: opacity 1s 0s, visibility 0s 0s;
    & .categorie, & .pagelink, & .social {
      top: 0;
      opacity: 1;
      transition: top 1s 1s cubic-bezier(.23, 1.25, .46, 1), opacity 1s 1s;
    };
    & .categorie:nth-child(1) {
      transition-delay: .6s;
    };
    & .categorie:nth-child(2) {
      transition-delay: .7s;
    };
    & .categorie:nth-child(3) {
      transition-delay: .8s;
    };
    & .categorie:nth-child(4) {
      transition-delay: .9s;
    };
    & .pagelink:nth-child(1) {
      transition-delay: 1s;
    };
    & .pagelink:nth-child(2) {
      transition-delay: 1.1s;
    };
    & .pagelink:nth-child(2) {
      transition-delay: 1.1s;
    };
    & .social:nth-child(1) {
      transition-delay: 1.2s;
    };
    & .social:nth-child(2) {
      transition-delay: 1.3s;
    };
  `)};
`;
