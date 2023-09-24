import React from 'react';
import styles from './App.module.scss';

const BlueButton = ({ children }) => (
  <a href="#" className={styles.buttonBlue}>
    {children}
  </a>
);

export default BlueButton;
