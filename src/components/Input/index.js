import React from 'react';

const Input = (props) => <div><label>{props.label}</label><input type="text" name={props.name} onChange={props.handleChange}></input></div>

export default Input;
