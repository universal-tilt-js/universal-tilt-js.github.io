import ReactTilt from 'react-universal-tilt';
import styled from 'styled-components';

export const TiltCard = styled(ReactTilt)`
  /* TODO mixin */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px; /* TODO theme */
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;

  .shine {
    transform: translateZ(0);
    border-radius: inherit;
  }
`;
