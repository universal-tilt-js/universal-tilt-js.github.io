import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.article`
  padding: 10px 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px 40px;
  }
`;

const PreviewTitle = styled.h3<{ colorPattern?: [string, string] }>`
  margin: 0 0 4px;
  font-weight: 700;
  font-size: 25px;

  ${({ colorPattern }) =>
    colorPattern
      ? `
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: ${colorPattern[0]};
  background: linear-gradient(45deg, ${colorPattern[0]} 0%, ${colorPattern[1]} 100%);
  `
      : `color: ${({ theme }) => theme.colors.text}`}
`;

const PreviewContent = styled.div`
  p {
    font-size: 1.8rem;
    line-height: 1.4;
  }

  a {
    font-weight: 700;
    text-decoration: none;
  }

  code {
    font-family: ${({ theme }) => theme.font.family.code};
    background-color: ${({ theme }) => theme.colors.code} !important;
    padding: 0.1em 0.4em !important;
  }

  .gatsby-highlight {
    pre {
      background-color: ${({ theme }) => theme.colors.code};
      code {
        padding: 0 !important;
      }
    }
  }
`;

const Preview: React.FC<any> = ({ data }) => (
  <PreviewWrapper>
    <PreviewTitle
      colorPattern={[
        data.frontmatter.themePrimary,
        data.frontmatter.themeSecondary,
      ]}
    >
      {data.frontmatter.title}
    </PreviewTitle>

    <PreviewContent dangerouslySetInnerHTML={{ __html: data.html }} />
  </PreviewWrapper>
);

export default Preview;
