'use client'

import React from 'react';
import MediaQuery from 'react-responsive';
import { MobileMenu } from './MobileMenu';
import { MenuItems } from './MenuItems';

const MenuBarResponsive = () => {
  return (
    <div>
      <MediaQuery maxWidth={639}>
        <MobileMenu/>
      </MediaQuery>
      <MediaQuery minWidth={640}>
        <MenuItems desktop={true}/>
      </MediaQuery>
    </div>
  );
}

export default MenuBarResponsive;
