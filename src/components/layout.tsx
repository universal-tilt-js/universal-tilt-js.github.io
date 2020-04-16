import React from 'react';
import { useViewport } from 'react-viewport-hooks';

import { Global } from './global';

const Layout: React.FC = ({ children }) => {
  const { vh } = useViewport();

  return (
    <>
      {children}

      <Global />
    </>
  );
};

export default Layout;
