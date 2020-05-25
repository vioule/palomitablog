import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import FullscreenLayout from './styled-components';
import { appear } from '../../theme/animations';

const AnimatedSvg = styled.svg`
  width: 5rem;
  height: 5rem;
  &>circle{
    transform-origin: 50% 50%;
    animation: animation 1s alternate infinite ease-in-out, rotation 2s infinite linear;
  }
  &>text{
    font-family: ${({ theme }) => theme.fonts.special};
    font-weight: 700;
    animation: text 1s alternate infinite ease-in-out;
  }
  @keyframes animation {
    from {
      stroke-dashoffset: 50;
      stroke-width: 3;
      stroke: ${({ theme }) => theme.colors.light}
    }
    to {
      stroke-dashoffset: 270;
      stroke-width: 8;
      stroke: ${({ theme }) => theme.colors.dark}
    }
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes text {
    from {
      fill: ${({ theme }) => theme.colors.dark};
    }
    to {
      fill: ${({ theme }) => theme.colors.normal};
    }
  }
  ${appear};
`;

export const Loader = () => {
  const [appear, setAppear] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setAppear(!appear);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <AnimatedSvg viewBox="0 0 100 100" appear={appear}>
      <circle strokeDasharray="300" strokeLinecap="round" className="circle" r="45" cx="50" cy="50" fill="none" />
      <text
        alignmentBaseline="middle"
        textAnchor="middle"
        x="50"
        y="50"
        fontSize="35"
      >
        P.
      </text>
    </AnimatedSvg>
  );
};

export const PageLoader = () => (
  <FullscreenLayout>
    <Loader />
  </FullscreenLayout>
);
