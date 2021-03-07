import React from 'react';
import styled from 'styled-components';

import { TiltCard } from './tilt-card';
import { callbacks } from '../utils/callbacks';

// TODO
const flex = `
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Wrapper = styled.header`
  ${flex}

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    top: 0;
    width: 20vw;
    min-width: ${({ theme }) => theme.breakpoints.xs};
    display: block;
    height: 100vh; /* TODO */
    height: var(--vh); /* TODO */
    position: sticky;
    border-right: 1px solid #444; /* TODO */
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }
`;

const TiltInner = styled.div`
  transform: translateZ(50px);
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

const TiltTitle = styled.h1`
  margin: 0;
  font-weight: 700;
`;

const TiltSubTitle = styled.span`
  font-weight: 400;
  display: block;
`;

const PrimaryTilt = styled(TiltCard)`
  background: #3c3aad;
  background: linear-gradient(45deg, #3c3aad 0%, #f7c340 100%);
`;

const Tilt = styled(TiltCard)`
  background: #5a00ff;
  background: linear-gradient(150deg, #5a00ff 0%, #ff1ff7 100%);
`;

const VanillaTilt = styled(TiltCard)`
  background: #347cf7;
  background: linear-gradient(135deg, #347cf7 0%, #f6290c 100%);
`;

const Primary = styled.section`
  display: flex;
  justify-content: center;

  ${TiltTitle} {
    font-size: 2.6rem;
  }

  ${TiltSubTitle} {
    margin-top: 6px;
    font-size: 1.8rem;
  }

  ${TiltCard} {
    width: 240px;
    height: 240px;
    margin: 30px 0;
  }
`;

const Secondary = styled.section`
  ${TiltTitle} {
    font-size: 2.6rem;
  }

  ${TiltSubTitle} {
    margin-top: 3px;
    font-size: 1.4rem;
  }

  ${TiltCard} {
    width: 200px;
    height: 200px;
    margin: 14px 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      margin: 16px;
    }
  }
`;

const SplitView = styled.div`
  ${flex}

  > div {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 20px;
    flex-direction: column;
  }
`;

const Idea = styled.h3`
  font-size: 2.8rem;
  text-align: center;
  margin: 0 0 10px;
`;

const Header = () => (
  <Wrapper>
    <Primary>
      <a href="https://github.com/JB1905/universal-tilt.js">
        <PrimaryTilt
          callbacks={callbacks}
          settings={{
            shadow: false,
            // shadow: true,
            shine: true,
            'shine-opacity': 0.5,
            'shine-save': false,
            max: 12,
            perspective: 500,
            scale: 1.08,
          }}
        >
          <TiltInner>
            <TiltTitle>universal-tilt.js</TiltTitle>
            <TiltSubTitle>See on GitHub</TiltSubTitle>
          </TiltInner>
        </PrimaryTilt>
      </a>
    </Primary>

    <Secondary>
      <Idea>Based on:</Idea>

      <SplitView>
        <div>
          <a href="https://gijsroge.github.io/tilt.js/">
            <Tilt
              callbacks={callbacks}
              settings={{
                shadow: false,
                // shadow: true,
                shine: true,
                'shine-opacity': 0.5,
                'shine-save': false,
                max: 15,
                perspective: 500,
                scale: 1.1,
              }}
            >
              <TiltInner>
                <TiltTitle as="h2">tilt.js</TiltTitle>
                <TiltSubTitle>by Gijs Rogé</TiltSubTitle>
              </TiltInner>
            </Tilt>
          </a>
        </div>

        <div>
          <a href="https://micku7zu.github.io/vanilla-tilt.js/index.html">
            <VanillaTilt
              callbacks={callbacks}
              settings={{
                shadow: false,
                // shadow: true,
                shine: true,
                'shine-opacity': 0.5,
                'shine-save': false,
                max: 15,
                perspective: 500,
                scale: 1.1,
              }}
            >
              <TiltInner>
                <TiltTitle as="h2">vanilla-tilt.js</TiltTitle>
                <TiltSubTitle>by Șandor Sergiu</TiltSubTitle>
              </TiltInner>
            </VanillaTilt>
          </a>
        </div>
      </SplitView>
    </Secondary>
  </Wrapper>
);

export default Header;
