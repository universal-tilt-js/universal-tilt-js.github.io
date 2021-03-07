import ReactTilt from 'react-universal-tilt';
import styled from 'styled-components';

export const TiltCard = styled(ReactTilt)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; /* TODO theme */

/* TODO */
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  .shine {
    transform: translateZ(0);
    border-radius: inherit;
  }

  /* .tilt-inner {
  width: 60%;
  height: 60%;
  position: absolute;
  border-radius: 10px;
  transform: translateZ(70px);
  box-shadow: 0 0 50px 0 rgba(51, 51, 51, 0.3);
  background-color: #fff;
} */
`;
