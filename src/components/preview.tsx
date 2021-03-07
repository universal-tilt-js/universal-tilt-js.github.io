import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Preview = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* min-height: 380px; */
  padding: 10px 20px;

  /* @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 40px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: 30px;
  } */
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 2.5rem;
  
  /* -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent; */
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const Example = styled.div`
  /* @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    min-width: 40%;
  } */
`;

const Docs = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
    /* padding-top: 0; */
    /* padding-left: 30px; */
    /* width: 60%; */
    flex: 1;
  }
`;

const Content = styled.div``;

// interface Props {
//   readonly title: string;
//   readonly icon?: IconProp;
// }

Preview.Title = ({ children, icon }) => (
  <Title>
    {icon && <Icon icon={icon} />}
    {children}
  </Title>
);

Preview.Example = Example;
Preview.Docs = Docs;
Preview.Content = Content;

export default Preview;
