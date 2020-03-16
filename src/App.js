import React from 'react';
import { useViewport } from 'react-viewport-hooks';

import Header from './components/Header';
import Content from './components/Content';

import './App.css';

export default () => {
  const { vh } = useViewport();

  document.documentElement.style.setProperty('--vh', `${vh}px`);

  return (
    <div className="wrap">
      <Header />
      <Content />
    </div>
  );
};
