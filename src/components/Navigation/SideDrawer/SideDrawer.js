import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';

const sideDrawer = props => {
  // Want to constantly add CSS for animations
  return (
    <div className={classes.SideDrawer}>
      <Logo></Logo>
      <nav>
        <NavigationItems></NavigationItems>
      </nav>
    </div>
  );
};

export default sideDrawer;
