import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
  // Want to constantly add CSS for animations
  return (
    <div className={classes.SideDrawer}>
      {/* Logo class here is different from the one in Logo.js because of CSS modulesbundleRenderer.
        Here it has adapted height for responsive. */}
      <div className={classes.Logo}>
        <Logo></Logo>
      </div>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer;
