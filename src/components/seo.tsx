import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { PageQuery } from '../../graphql-types';

// TODO
type Meta =
  | { name: string; content: string; property?: undefined }[]
  | { property: string; content: string; name?: undefined }[];

interface Props {
  readonly description?: string;
  readonly lang?: string;
  readonly meta?: Meta;
  readonly title: string;
}

const SEO = ({ description, lang = 'en', meta = [], title = '' }: Props) => {
  const { site } = useStaticQuery<PageQuery>(query);

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${metaDescription}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};

export const query = graphql`
  query Page {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

export default SEO;
