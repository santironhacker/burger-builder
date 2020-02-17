import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import classes from './Logo.module.css';

const logo = props => (
  <div className={classes.Logo}>
    {/* We cannot just copy relative path to src of the image, because react when deploying will change the folders.
        We need to copy it to destination directory, where webpack will store the image. */}
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
