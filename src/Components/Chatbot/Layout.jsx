// Layout.js
import React from 'react';
import Chatbot from './Chatbot';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <Chatbot />
    </div>
  );
};

export default Layout;
