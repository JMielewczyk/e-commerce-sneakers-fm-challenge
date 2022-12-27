import styled from 'styled-components';

export const GreyBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 40%);
  width: 100vw;
  height: 100vh;
  transform: translateX(-101vw);
  &.active {
    transform: translateX(0);
  }
`;
