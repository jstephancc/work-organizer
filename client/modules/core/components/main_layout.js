import React from 'react';
import Navigation from './navigation';
import HeaderBar from './headerBar';
import FooterBar from './footerBar';

//    <Navigation />

const Layout = ({content = () => null }) => (
  <div className="container">
    <HeaderBar/>
    <div>
    {content()}
    </div>
    <FooterBar/>
  </div>
);

export default Layout;
