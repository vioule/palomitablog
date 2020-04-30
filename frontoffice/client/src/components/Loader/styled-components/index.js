import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  left: 0;
`;
