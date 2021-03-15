import React from 'react';
//STYLES
import styles from './touchablearea.module.css';

const TouchableArea = (props) => <div className={styles.touchablearea} onClick={props.functionality}><h1>{props.children}</h1></div>

export default TouchableArea;