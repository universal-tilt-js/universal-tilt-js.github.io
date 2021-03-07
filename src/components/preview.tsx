import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Preview = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 2.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;

const Example = styled.div``;

const Docs = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.xl}) {
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
